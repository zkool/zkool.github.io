// 弹窗类
class ScanModal {
    constructor() {
        this.createModalStructure();
        this.bindEvents();
    }

    // 创建弹窗结构
    createModalStructure() {
        const modalHTML = `
                    <div class="scan-modal-overlay" id="scanModalOverlay">
                        <div class="scan-modal" id="scanModal">
                            <span class="scan-modal-close">&times;</span>
                            <div class="scan-modal-header">
                                <h2 id="scanModalTitle"></h2>
                            </div>
                            <div class="scan-modal-content" id="scanModalContent"></div>
                            <div class="scan-modal-footer">
                                <button class="scan-modal-confirm-btn">确认</button>
                                <button class="scan-modal-close-btn">关闭</button>
                            </div>
                            <div class="btn-center">
                                <button id="scanModalFlashlight" onclick="openFlashlight()" class="scan-modal-confirm-btn">开灯</button>
                            </div>
                        </div>
                    </div>
                `;
        document.body.insertAdjacentHTML('beforeend', modalHTML);
        this.addStyles();
    }

    // 添加样式
    addStyles() {
        const style = document.createElement('style');
        style.textContent = `
                    .scan-modal-overlay {
                        position: fixed;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        background: rgba(0, 0, 0, 0.5);
                        display: none;
                        justify-content: center;
                        align-items: center;
                        z-index: 1000;
                    }

                    .scan-modal {
                        background: white;
                        padding: 20px;
                        border-radius: 8px;
                        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
                        width: 90%;
                        max-width: 500px;
                        transform: scale(0.8);
                        opacity: 0;
                        transition: all 0.3s ease;
                    }

                    .scan-modal-active {
                        transform: scale(1);
                        opacity: 1;
                    }

                    .scan-modal-header {
                        padding-bottom: 5px;
                        margin-bottom: 10px;
                        border-bottom: 1px solid #ddd;
                    }

                    .scan-modal-header h2 {
                        margin: 0;
                        font-size: 18px;
                    }

                    .scan-modal-content {
                        margin-bottom: 15px;
                        max-height: 60vh;
                        overflow-y: auto;
                    }

                    .scan-modal-footer {
                        text-align: right;
                        display: none;
                    }

                    .scan-modal-close {
                        position: absolute;
                        top: 10px;
                        right: 10px;
                        cursor: pointer;
                        font-size: 24px;
                        line-height: 1;
                    }

                    .scan-modal-confirm-btn, .scan-modal-close-btn {
                        padding: 6px 12px;
                        border: none;
                        border-radius: 4px;
                        cursor: pointer;
                        margin-left: 8px;
                    }

                    .scan-modal-confirm-btn {
                        background: #007bff;
                        color: white;
                    }

                    .scan-modal-confirm-btn:hover {
                        background: #0056b3;
                    }

                    .scan-modal-close-btn {
                        background: #6c757d;
                        color: white;
                    }

                    .scan-modal-close-btn:hover {
                        background: #5a6268;
                    }
                    
                    .btn-center {
                        display: flex;
                        justify-content: center;
                    }
                `;
        document.head.appendChild(style);
    }

    // 绑定事件
    bindEvents() {
        document.querySelector('.scan-modal-close').addEventListener('click', () => this.close());
        document.querySelector('.scan-modal-close-btn').addEventListener('click', () => this.close());
        document.getElementById('scanModalOverlay').addEventListener('click', (e) => {
            if (e.target === e.currentTarget) this.close();
        });
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') this.close();
        });
    }

    // 显示弹窗
    show(title, content, callback) {
        this.callback = callback;
        document.getElementById('scanModalTitle').textContent = title;
        document.getElementById('scanModalContent').textContent = content;
        document.querySelector('.scan-modal-footer').style.display = 'block';
        document.getElementById('scanModalFlashlight').style.display = 'none';

        const overlay = document.getElementById('scanModalOverlay');
        overlay.style.display = 'flex';
        setTimeout(() => {
            document.getElementById('scanModal').classList.add('scan-modal-active');
        }, 10);

        // 绑定确认按钮
        const confirmBtn = document.querySelector('.scan-modal-confirm-btn');
        confirmBtn.onclick = () => {
            if (typeof this.callback === 'function') {
                this.callback();
            }
            this.close();
        };
    }

    // 显示扫码框
    showScan(title, html5QrCodeInstance, config, callback){
        document.getElementById('scanModalTitle').textContent = title;
        document.querySelector('.scan-modal-footer').style.display = 'none';
        document.getElementById('scanModalFlashlight').style.display = 'block';

        var lastResult = '';
        html5QrCodeInstance.start({ facingMode: "environment" }, config, function(decodedText, decodedResult){
            if (decodedText !== lastResult) {
                lastResult = decodedText;
                if (typeof callback === 'function') {
                    callback(decodedText, decodedResult);
                }
                scanModal.close();
            }
        });

        setTimeout(() => {
            const overlay = document.getElementById('scanModalOverlay');
            overlay.style.display = 'flex';
            document.getElementById('scanModal').classList.add('scan-modal-active');
        }, 300);

    }

    qrboxFunction(viewfinderWidth, viewfinderHeight) {
        console.log("viewfinderWidth",viewfinderWidth)
        console.log("viewfinderHeight",viewfinderHeight)
        // Square QR Box, with size = 80% of the min edge.
        var minEdgeSizeThreshold = 250;
        var edgeSizePercentage = 0.75;
        var minEdgeSize = (viewfinderWidth > viewfinderHeight) ?
            viewfinderHeight : viewfinderWidth;
        var qrboxEdgeSize = Math.floor(minEdgeSize * edgeSizePercentage);
        if (qrboxEdgeSize < minEdgeSizeThreshold) {
            if (minEdgeSize < minEdgeSizeThreshold) {
                return {width: minEdgeSize, height: minEdgeSize};
            } else {
                return {
                    width: minEdgeSizeThreshold,
                    height: minEdgeSizeThreshold
                };
            }
        }
        return {width: qrboxEdgeSize, height: qrboxEdgeSize};
    }

    // 关闭弹窗
    close() {
        try {
            html5QrCode.stop();
        } catch (error) {
            console.log(error);
        }
        const modal = document.getElementById('scanModal');
        modal.classList.remove('scan-modal-active');
        setTimeout(() => {
            document.getElementById('scanModalOverlay').style.display = 'none';
        }, 300);
    }
}

// 创建单例
const scanModal = new ScanModal();
const html5QrCode = new Html5Qrcode("scanModalContent");
// const config = { fps: 10, qrbox: { width: 250, height: 250 } };
const config = { fps: 10, qrbox: scanModal.qrboxFunction };


// 对外暴露的API

// 普通弹窗
function showBaseModal(title, content, callback) {
    scanModal.show(title, content, callback);
}

// 扫码弹窗
function showScanModal(callback) {
    scanModal.showScan('扫一扫', html5QrCode, config, callback);
}

// 开灯/关灯
function openFlashlight(){
/*    const newSetting = !html5QrCode.getRunningTrackSettings().torch; // i.e. toggling
    const constraints = {
        "torch": newSetting,
        "advanced": [{ "torch": newSetting }]
    };
    try { // not sure if I need to try-catch here?
        html5QrCode.applyVideoConstraints(constraints);
    } catch (e) {
        console.log(e);
    }*/

    // Toggle flashlight.
    const torch = html5QrCode.getRunningTrackCameraCapabilities().torchFeature();
    const flashlight = document.getElementById('scanModalFlashlight');
    if(torch.value()){
        flashlight.textContent = '开灯';
        flashlight.classList.remove('scan-modal-close-btn');
        flashlight.classList.add('scan-modal-confirm-btn');
    }else{
        flashlight.textContent = '关灯';
        flashlight.classList.remove('scan-modal-confirm-btn');
        flashlight.classList.add('scan-modal-close-btn');
    }

    torch.apply(!torch.value());
}