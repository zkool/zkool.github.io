let gs1Ais = {
  "@context": {
    "dc": "http://purl.org/dc/elements/1.1/",
    "gs1": "https://gs1.org/voc/",
    "owl": "http://www.w3.org/2002/07/owl#",
    "rdfs": "http://www.w3.org/2000/01/rdf-schema#",
    "schema": "http://schema.org/",
    "voaf": "http://purl.org/vocommons/voaf#",
    "xsd": "http://www.w3.org/2001/XMLSchema#",
    "@base": "https://ref.gs1.org/ai/",
    "applicationIdentifier": "@id",
    "label": "rdfs:label",
    "description": "rdfs:comment",
    "applicationIdentifiers": "@graph",
    "id": "@id",
    "a": "@type"
  },
  "applicationIdentifiers": [
    {
      "id": "https://ref.gs1.org/ai",
      "a": [
        "voaf:Vocabulary",
        "owl:Ontology"
      ],
      "schema:license": "data:text/html;charset=UTF-8,<p>GS1&reg;, under its IP Policy, seeks to avoid uncertainty regarding intellectual property claims by requiring the participants in the Work Groups that developed this vocabulary to agree to grant to GS1 members a royalty-free licence or a RAND licence to Necessary Claims, as that term is defined in the GS1 IP Policy. Furthermore, attention is drawn to the possibility that an implementation of one or more features of this vocabulary may be the subject of a patent or other intellectual property     right that does not involve a Necessary Claim. Any such patent or other intellectual property right is not subject to the licencing obligations of GS1. Moreover, the agreement to grant licences provided under the GS1 IP Policy does not include IP rights and any claims of third parties who were not participants in the Work Groups. Accordingly, GS1 recommends that any organisation developing an implementation designed to be in conformance with this vocabulary should determine whether there are any     patents that may encompass a specific implementation that the organisation is developing in compliance with the vocabulary and whether a licence under a patent or other intellectual property right is needed. Such a determination of a need for licencing should be made in view of the details of the specific system designed by the organisation in consultation with their own patent counsel. THIS DOCUMENT IS PROVIDED &quot;AS IS&quot; WITH NO WARRANTIES WHATSOEVER, INCLUDING ANY WARRANTY OF MERCHANTABILITY, NONINFRINGMENT, FITNESS FOR PARTICULAR PURPOSE, OR ANY WARRANTY OTHER WISE ARISING OUT OF THIS SPECIFICATION. GS1 disclaims all liability for any damages arising from use or misuse of this vocabulary, whether special, indirect, consequential, or compensatory damages, and including liability for infringement of any intellectual property     rights, relating to use of information in or reliance upon this document. GS1 retains the right to make changes to this vocabulary at any time, without notice. GS1 makes no warranty for the use of this vocabulary and assumes no responsibility for any errors which may appear in the vocabulary, nor does it make a commitment to update the     information contained herein. GS1 and the GS1 logo are registered trademarks of GS1 AISBL.</p><p>Copyright 2015-2019 GS1 AISBL</p><p>Licensed under the Apache License, Version 2.0 (the &quot;License&quot;); you may not use this file except in compliance with the License. You may obtain a copy of the License at <a href=&quot;http://www.apache.org/licenses/LICENSE-2.0&quot; target=&quot;blank&quot;>http://www.apache.org/licenses/LICENSE-2.0</a>.<p><p>Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an &quot;AS IS&quot; BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.</p>",
      "dc:creator": {
        "@id": "https://www.gs1.org/"
      },
      "dc:issued:": {
        "@type": "xsd:date",
        "@value": "2024-01-24"
      },
      "dc:lastModified": {
        "@type": "xsd:date",
        "@value": "2025-06-14"
      },
      "owl:versionInfo": "1.1",
      "dc:contributors": "Mark Harrison, Phil Archer, Peta Ding, Terry Burton"
    },
    {
      "applicationIdentifier": "00",
      "formatString": "N2+N18",
      "description": "Serial Shipping Container Code (SSCC)",
      "regex": "(\\d{18})",
      "note": "",
      "title": "SSCC",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 18,
          "checkDigit": true,
          "key": true
        }
      ],
      "gs1DigitalLinkPrimaryKey": true,
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "01",
      "formatString": "N2+N14",
      "description": "Global Trade Item Number (GTIN)",
      "regex": "(\\d{14})",
      "note": "",
      "title": "GTIN",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 14,
          "checkDigit": true,
          "key": true
        }
      ],
      "gs1DigitalLinkPrimaryKey": true,
      "gs1DigitalLinkQualifiers": [
        [
          "22",
          "10",
          "21"
        ],
        [
          "235"
        ]
      ],
      "excludes": [
        "02",
        "03",
        "255",
        "37"
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "02",
      "formatString": "N2+N14",
      "description": "Global Trade Item Number (GTIN) of contained trade items",
      "regex": "(\\d{14})",
      "note": "",
      "title": "CONTENT",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 14,
          "checkDigit": true,
          "key": true
        }
      ],
      "requires": [
        [
          "00",
          "37"
        ]
      ],
      "excludes": [
        "01",
        "03"
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "03",
      "formatString": "N2+N14",
      "description": "Identification of a Made-to-Order (MtO) trade item (GTIN)",
      "regex": "(\\d{14})",
      "note": "",
      "title": "MTO GTIN",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 14,
          "checkDigit": true,
          "key": true
        }
      ],
      "gs1DigitalLinkPrimaryKey": false,
      "excludes": [
        "01",
        "02",
        "37"
      ],
      "validAsDataAttribute": false
    },
    {
      "applicationIdentifier": "10",
      "formatString": "N2+X..20",
      "description": "Batch or lot number",
      "regex": "([!%-?A-Z_a-z\\x22]{1,20})",
      "note": "",
      "title": "BATCH/LOT",
      "separatorRequired": true,
      "components": [
        {
          "optional": false,
          "type": "X",
          "fixedLength": false,
          "length": 20
        }
      ],
      "requires": [
        "01",
        "02",
        "03",
        "8006",
        "8026"
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "11",
      "formatString": "N2+N6",
      "description": "Production date (YYMMDD)",
      "regex": "(\\d{2}(?:0\\d|1[0-2])(?:[0-2]\\d|3[01]))",
      "note": "",
      "title": "PROD DATE",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6,
          "format": "yymmd0"
        }
      ],
      "requires": [
        "01",
        "02",
        "8006",
        "8026"
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "12",
      "formatString": "N2+N6",
      "description": "Due date (YYMMDD)",
      "regex": "(\\d{2}(?:0\\d|1[0-2])(?:[0-2]\\d|3[01]))",
      "note": "",
      "title": "DUE DATE",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6,
          "format": "yymmd0"
        }
      ],
      "requires": [
        [
          "8020",
          "415"
        ]
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "13",
      "formatString": "N2+N6",
      "description": "Packaging date (YYMMDD)",
      "regex": "(\\d{2}(?:0\\d|1[0-2])(?:[0-2]\\d|3[01]))",
      "note": "",
      "title": "PACK DATE",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6,
          "format": "yymmd0"
        }
      ],
      "requires": [
        "01",
        "02",
        "8006",
        "8026"
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "15",
      "formatString": "N2+N6",
      "description": "Best before date (YYMMDD)",
      "regex": "(\\d{2}(?:0\\d|1[0-2])(?:[0-2]\\d|3[01]))",
      "note": "",
      "title": "BEST BEFORE or BEST BY",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6,
          "format": "yymmd0"
        }
      ],
      "requires": [
        "01",
        "02",
        "8006",
        "8026"
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "16",
      "formatString": "N2+N6",
      "description": "Sell by date (YYMMDD)",
      "regex": "(\\d{2}(?:0\\d|1[0-2])(?:[0-2]\\d|3[01]))",
      "note": "",
      "title": "SELL BY",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6,
          "format": "yymmd0"
        }
      ],
      "requires": [
        "01",
        "02",
        "8006",
        "8026"
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "17",
      "formatString": "N2+N6",
      "description": "Expiration date (YYMMDD)",
      "regex": "(\\d{2}(?:0\\d|1[0-2])(?:[0-2]\\d|3[01]))",
      "note": "",
      "title": "USE BY or EXPIRY",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6,
          "format": "yymmd0"
        }
      ],
      "requires": [
        "01",
        "02",
        "255",
        "8006",
        "8026"
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "20",
      "formatString": "N2+N2",
      "description": "Internal product variant",
      "regex": "(\\d{2})",
      "note": "",
      "title": "VARIANT",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 2
        }
      ],
      "requires": [
        "01",
        "02",
        "8006",
        "8026"
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "21",
      "formatString": "N2+X..20",
      "description": "Serial number",
      "regex": "([!%-?A-Z_a-z\\x22]{1,20})",
      "note": "",
      "title": "SERIAL",
      "separatorRequired": true,
      "components": [
        {
          "optional": false,
          "type": "X",
          "fixedLength": false,
          "length": 20
        }
      ],
      "requires": [
        "01",
        "03",
        "8006"
      ],
      "excludes": [
        "235"
      ],
      "validAsDataAttribute": false
    },
    {
      "applicationIdentifier": "22",
      "formatString": "N2+X..20",
      "description": "Consumer product variant",
      "regex": "([!%-?A-Z_a-z\\x22]{1,20})",
      "note": "",
      "title": "CPV",
      "separatorRequired": true,
      "components": [
        {
          "optional": false,
          "type": "X",
          "fixedLength": false,
          "length": 20
        }
      ],
      "requires": [
        "01"
      ],
      "validAsDataAttribute": false
    },
    {
      "applicationIdentifier": "235",
      "formatString": "N3+X..28",
      "description": "Third Party Controlled, Serialised Extension of Global Trade Item Number (GTIN) (TPX)",
      "regex": "([!%-?A-Z_a-z\\x22]{1,28})",
      "note": "",
      "title": "TPX",
      "separatorRequired": true,
      "components": [
        {
          "optional": false,
          "type": "X",
          "fixedLength": false,
          "length": 28
        }
      ],
      "requires": [
        "01"
      ],
      "validAsDataAttribute": false
    },
    {
      "applicationIdentifier": "240",
      "formatString": "N3+X..30",
      "description": "Additional product identification assigned by the manufacturer",
      "regex": "([!%-?A-Z_a-z\\x22]{1,30})",
      "note": "",
      "title": "ADDITIONAL ID",
      "separatorRequired": true,
      "components": [
        {
          "optional": false,
          "type": "X",
          "fixedLength": false,
          "length": 30
        }
      ],
      "requires": [
        "01",
        "02",
        "8006",
        "8026"
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "241",
      "formatString": "N3+X..30",
      "description": "Customer part number",
      "regex": "([!%-?A-Z_a-z\\x22]{1,30})",
      "note": "",
      "title": "CUST. PART No.",
      "separatorRequired": true,
      "components": [
        {
          "optional": false,
          "type": "X",
          "fixedLength": false,
          "length": 30
        }
      ],
      "requires": [
        "01",
        "02",
        "8006",
        "8026"
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "242",
      "formatString": "N3+N..6",
      "description": "Made-to-Order variation number",
      "regex": "(\\d{1,6})",
      "note": "",
      "title": "MTO VARIANT",
      "separatorRequired": true,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": false,
          "length": 6
        }
      ],
      "requires": [
        "01",
        "02",
        "03",
        "8006",
        "8026"
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "243",
      "formatString": "N3+X..20",
      "description": "Packaging component number",
      "regex": "([!%-?A-Z_a-z\\x22]{1,20})",
      "note": "",
      "title": "PCN",
      "separatorRequired": true,
      "components": [
        {
          "optional": false,
          "type": "X",
          "fixedLength": false,
          "length": 20
        }
      ],
      "requires": [
        "01"
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "250",
      "formatString": "N3+X..30",
      "description": "Secondary serial number",
      "regex": "([!%-?A-Z_a-z\\x22]{1,30})",
      "note": "",
      "title": "SECONDARY SERIAL",
      "separatorRequired": true,
      "components": [
        {
          "optional": false,
          "type": "X",
          "fixedLength": false,
          "length": 30
        }
      ],
      "requires": [
        [
          "01",
          "21"
        ],
        [
          "8006",
          "21"
        ]
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "251",
      "formatString": "N3+X..30",
      "description": "Reference to source entity",
      "regex": "([!%-?A-Z_a-z\\x22]{1,30})",
      "note": "",
      "title": "REF. TO SOURCE",
      "separatorRequired": true,
      "components": [
        {
          "optional": false,
          "type": "X",
          "fixedLength": false,
          "length": 30
        }
      ],
      "requires": [
        "01",
        "8006"
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "253",
      "formatString": "N3+N13[+X..17]",
      "description": "Global Document Type Identifier (GDTI)",
      "regex": "(\\d{13})([!%-?A-Z_a-z\\x22]{0,17})",
      "note": "",
      "title": "GDTI",
      "separatorRequired": true,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 13,
          "checkDigit": true,
          "key": true
        },
        {
          "optional": true,
          "type": "X",
          "fixedLength": false,
          "length": 17
        }
      ],
      "gs1DigitalLinkPrimaryKey": true,
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "254",
      "formatString": "N3+X..20",
      "description": "Global Location Number (GLN) extension component",
      "regex": "([!%-?A-Z_a-z\\x22]{1,20})",
      "note": "",
      "title": "GLN EXTENSION COMPONENT",
      "separatorRequired": true,
      "components": [
        {
          "optional": false,
          "type": "X",
          "fixedLength": false,
          "length": 20
        }
      ],
      "requires": [
        "414"
      ],
      "validAsDataAttribute": false
    },
    {
      "applicationIdentifier": "255",
      "formatString": "N3+N13[+N..12]",
      "description": "Global Coupon Number (GCN)",
      "regex": "(\\d{13})(\\d{0,12})",
      "note": "",
      "title": "GCN",
      "separatorRequired": true,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 13,
          "checkDigit": true,
          "key": true
        },
        {
          "optional": true,
          "type": "N",
          "fixedLength": false,
          "length": 12
        }
      ],
      "gs1DigitalLinkPrimaryKey": true,
      "excludes": [
        "01",
        "02",
        "415",
        "8006",
        "8020",
        "8026"
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "30",
      "formatString": "N2+N..8",
      "description": "Variable count of items (variable measure trade item)",
      "regex": "(\\d{0,8})",
      "note": "",
      "title": "VAR. COUNT",
      "separatorRequired": true,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": false,
          "length": 8
        }
      ],
      "requires": [
        "01",
        "02"
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3100",
      "formatString": "N4+N6",
      "description": "Net weight, kilograms (variable measure trade item)",
      "regex": "(\\d{6})",
      "note": "The fourth digit (0) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nnnnnn kilograms",
      "start": "3100",
      "end": "3105",
      "title": "NET WEIGHT (kg)",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "01",
        "02"
      ],
      "excludes": [
        {
          "start": "3100",
          "end": "3105"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3101",
      "formatString": "N4+N6",
      "description": "Net weight, kilograms (variable measure trade item)",
      "regex": "(\\d{6})",
      "note": "The fourth digit (1) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nnnnn.n kilograms",
      "start": "3100",
      "end": "3105",
      "title": "NET WEIGHT (kg)",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "01",
        "02"
      ],
      "excludes": [
        {
          "start": "3100",
          "end": "3105"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3102",
      "formatString": "N4+N6",
      "description": "Net weight, kilograms (variable measure trade item)",
      "regex": "(\\d{6})",
      "note": "The fourth digit (2) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nnnn.nn kilograms",
      "start": "3100",
      "end": "3105",
      "title": "NET WEIGHT (kg)",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "01",
        "02"
      ],
      "excludes": [
        {
          "start": "3100",
          "end": "3105"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3103",
      "formatString": "N4+N6",
      "description": "Net weight, kilograms (variable measure trade item)",
      "regex": "(\\d{6})",
      "note": "The fourth digit (3) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nnn.nnn kilograms",
      "start": "3100",
      "end": "3105",
      "title": "NET WEIGHT (kg)",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "01",
        "02"
      ],
      "excludes": [
        {
          "start": "3100",
          "end": "3105"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3104",
      "formatString": "N4+N6",
      "description": "Net weight, kilograms (variable measure trade item)",
      "regex": "(\\d{6})",
      "note": "The fourth digit (4) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nn.nnnn kilograms",
      "start": "3100",
      "end": "3105",
      "title": "NET WEIGHT (kg)",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "01",
        "02"
      ],
      "excludes": [
        {
          "start": "3100",
          "end": "3105"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3105",
      "formatString": "N4+N6",
      "description": "Net weight, kilograms (variable measure trade item)",
      "regex": "(\\d{6})",
      "note": "The fourth digit (5) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = n.nnnnn kilograms",
      "start": "3100",
      "end": "3105",
      "title": "NET WEIGHT (kg)",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "01",
        "02"
      ],
      "excludes": [
        {
          "start": "3100",
          "end": "3105"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3110",
      "formatString": "N4+N6",
      "description": "Length or first dimension, metres (variable measure trade item)",
      "regex": "(\\d{6})",
      "note": "The fourth digit (0) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nnnnnn metres",
      "start": "3110",
      "end": "3115",
      "title": "LENGTH (m)",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "01",
        "02"
      ],
      "excludes": [
        {
          "start": "3110",
          "end": "3115"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3111",
      "formatString": "N4+N6",
      "description": "Length or first dimension, metres (variable measure trade item)",
      "regex": "(\\d{6})",
      "note": "The fourth digit (1) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nnnnn.n metres",
      "start": "3110",
      "end": "3115",
      "title": "LENGTH (m)",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "01",
        "02"
      ],
      "excludes": [
        {
          "start": "3110",
          "end": "3115"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3112",
      "formatString": "N4+N6",
      "description": "Length or first dimension, metres (variable measure trade item)",
      "regex": "(\\d{6})",
      "note": "The fourth digit (2) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nnnn.nn metres",
      "start": "3110",
      "end": "3115",
      "title": "LENGTH (m)",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "01",
        "02"
      ],
      "excludes": [
        {
          "start": "3110",
          "end": "3115"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3113",
      "formatString": "N4+N6",
      "description": "Length or first dimension, metres (variable measure trade item)",
      "regex": "(\\d{6})",
      "note": "The fourth digit (3) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nnn.nnn metres",
      "start": "3110",
      "end": "3115",
      "title": "LENGTH (m)",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "01",
        "02"
      ],
      "excludes": [
        {
          "start": "3110",
          "end": "3115"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3114",
      "formatString": "N4+N6",
      "description": "Length or first dimension, metres (variable measure trade item)",
      "regex": "(\\d{6})",
      "note": "The fourth digit (4) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nn.nnnn metres",
      "start": "3110",
      "end": "3115",
      "title": "LENGTH (m)",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "01",
        "02"
      ],
      "excludes": [
        {
          "start": "3110",
          "end": "3115"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3115",
      "formatString": "N4+N6",
      "description": "Length or first dimension, metres (variable measure trade item)",
      "regex": "(\\d{6})",
      "note": "The fourth digit (5) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = n.nnnnn metres",
      "start": "3110",
      "end": "3115",
      "title": "LENGTH (m)",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "01",
        "02"
      ],
      "excludes": [
        {
          "start": "3110",
          "end": "3115"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3120",
      "formatString": "N4+N6",
      "description": "Width, diameter, or second dimension, metres (variable measure trade item)",
      "regex": "(\\d{6})",
      "note": "The fourth digit (0) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nnnnnn metres",
      "start": "3120",
      "end": "3125",
      "title": "WIDTH (m)",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "01",
        "02"
      ],
      "excludes": [
        {
          "start": "3120",
          "end": "3125"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3121",
      "formatString": "N4+N6",
      "description": "Width, diameter, or second dimension, metres (variable measure trade item)",
      "regex": "(\\d{6})",
      "note": "The fourth digit (1) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nnnnn.n metres",
      "start": "3120",
      "end": "3125",
      "title": "WIDTH (m)",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "01",
        "02"
      ],
      "excludes": [
        {
          "start": "3120",
          "end": "3125"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3122",
      "formatString": "N4+N6",
      "description": "Width, diameter, or second dimension, metres (variable measure trade item)",
      "regex": "(\\d{6})",
      "note": "The fourth digit (2) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nnnn.nn metres",
      "start": "3120",
      "end": "3125",
      "title": "WIDTH (m)",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "01",
        "02"
      ],
      "excludes": [
        {
          "start": "3120",
          "end": "3125"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3123",
      "formatString": "N4+N6",
      "description": "Width, diameter, or second dimension, metres (variable measure trade item)",
      "regex": "(\\d{6})",
      "note": "The fourth digit (3) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nnn.nnn metres",
      "start": "3120",
      "end": "3125",
      "title": "WIDTH (m)",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "01",
        "02"
      ],
      "excludes": [
        {
          "start": "3120",
          "end": "3125"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3124",
      "formatString": "N4+N6",
      "description": "Width, diameter, or second dimension, metres (variable measure trade item)",
      "regex": "(\\d{6})",
      "note": "The fourth digit (4) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nn.nnnn metres",
      "start": "3120",
      "end": "3125",
      "title": "WIDTH (m)",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "01",
        "02"
      ],
      "excludes": [
        {
          "start": "3120",
          "end": "3125"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3125",
      "formatString": "N4+N6",
      "description": "Width, diameter, or second dimension, metres (variable measure trade item)",
      "regex": "(\\d{6})",
      "note": "The fourth digit (5) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = n.nnnnn metres",
      "start": "3120",
      "end": "3125",
      "title": "WIDTH (m)",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "01",
        "02"
      ],
      "excludes": [
        {
          "start": "3120",
          "end": "3125"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3130",
      "formatString": "N4+N6",
      "description": "Depth, thickness, height, or third dimension, metres (variable measure trade item)",
      "regex": "(\\d{6})",
      "note": "The fourth digit (0) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nnnnnn metres",
      "start": "3130",
      "end": "3135",
      "title": "HEIGHT (m)",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "01",
        "02"
      ],
      "excludes": [
        {
          "start": "3130",
          "end": "3135"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3131",
      "formatString": "N4+N6",
      "description": "Depth, thickness, height, or third dimension, metres (variable measure trade item)",
      "regex": "(\\d{6})",
      "note": "The fourth digit (1) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nnnnn.n metres",
      "start": "3130",
      "end": "3135",
      "title": "HEIGHT (m)",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "01",
        "02"
      ],
      "excludes": [
        {
          "start": "3130",
          "end": "3135"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3132",
      "formatString": "N4+N6",
      "description": "Depth, thickness, height, or third dimension, metres (variable measure trade item)",
      "regex": "(\\d{6})",
      "note": "The fourth digit (2) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nnnn.nn metres",
      "start": "3130",
      "end": "3135",
      "title": "HEIGHT (m)",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "01",
        "02"
      ],
      "excludes": [
        {
          "start": "3130",
          "end": "3135"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3133",
      "formatString": "N4+N6",
      "description": "Depth, thickness, height, or third dimension, metres (variable measure trade item)",
      "regex": "(\\d{6})",
      "note": "The fourth digit (3) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nnn.nnn metres",
      "start": "3130",
      "end": "3135",
      "title": "HEIGHT (m)",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "01",
        "02"
      ],
      "excludes": [
        {
          "start": "3130",
          "end": "3135"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3134",
      "formatString": "N4+N6",
      "description": "Depth, thickness, height, or third dimension, metres (variable measure trade item)",
      "regex": "(\\d{6})",
      "note": "The fourth digit (4) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nn.nnnn metres",
      "start": "3130",
      "end": "3135",
      "title": "HEIGHT (m)",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "01",
        "02"
      ],
      "excludes": [
        {
          "start": "3130",
          "end": "3135"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3135",
      "formatString": "N4+N6",
      "description": "Depth, thickness, height, or third dimension, metres (variable measure trade item)",
      "regex": "(\\d{6})",
      "note": "The fourth digit (5) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = n.nnnnn metres",
      "start": "3130",
      "end": "3135",
      "title": "HEIGHT (m)",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "01",
        "02"
      ],
      "excludes": [
        {
          "start": "3130",
          "end": "3135"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3140",
      "formatString": "N4+N6",
      "description": "Area, square metres (variable measure trade item)",
      "regex": "(\\d{6})",
      "note": "The fourth digit (0) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nnnnnn square metres",
      "start": "3140",
      "end": "3145",
      "title": "AREA (m²)",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "01",
        "02"
      ],
      "excludes": [
        {
          "start": "3140",
          "end": "3145"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3141",
      "formatString": "N4+N6",
      "description": "Area, square metres (variable measure trade item)",
      "regex": "(\\d{6})",
      "note": "The fourth digit (1) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nnnnn.n square metres",
      "start": "3140",
      "end": "3145",
      "title": "AREA (m²)",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "01",
        "02"
      ],
      "excludes": [
        {
          "start": "3140",
          "end": "3145"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3142",
      "formatString": "N4+N6",
      "description": "Area, square metres (variable measure trade item)",
      "regex": "(\\d{6})",
      "note": "The fourth digit (2) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nnnn.nn square metres",
      "start": "3140",
      "end": "3145",
      "title": "AREA (m²)",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "01",
        "02"
      ],
      "excludes": [
        {
          "start": "3140",
          "end": "3145"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3143",
      "formatString": "N4+N6",
      "description": "Area, square metres (variable measure trade item)",
      "regex": "(\\d{6})",
      "note": "The fourth digit (3) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nnn.nnn square metres",
      "start": "3140",
      "end": "3145",
      "title": "AREA (m²)",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "01",
        "02"
      ],
      "excludes": [
        {
          "start": "3140",
          "end": "3145"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3144",
      "formatString": "N4+N6",
      "description": "Area, square metres (variable measure trade item)",
      "regex": "(\\d{6})",
      "note": "The fourth digit (4) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nn.nnnn square metres",
      "start": "3140",
      "end": "3145",
      "title": "AREA (m²)",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "01",
        "02"
      ],
      "excludes": [
        {
          "start": "3140",
          "end": "3145"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3145",
      "formatString": "N4+N6",
      "description": "Area, square metres (variable measure trade item)",
      "regex": "(\\d{6})",
      "note": "The fourth digit (5) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = n.nnnnn square metres",
      "start": "3140",
      "end": "3145",
      "title": "AREA (m²)",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "01",
        "02"
      ],
      "excludes": [
        {
          "start": "3140",
          "end": "3145"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3150",
      "formatString": "N4+N6",
      "description": "Net volume, litres (variable measure trade item)",
      "regex": "(\\d{6})",
      "note": "The fourth digit (0) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nnnnnn litres",
      "start": "3150",
      "end": "3155",
      "title": "NET VOLUME (l)",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "01",
        "02"
      ],
      "excludes": [
        {
          "start": "3150",
          "end": "3155"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3151",
      "formatString": "N4+N6",
      "description": "Net volume, litres (variable measure trade item)",
      "regex": "(\\d{6})",
      "note": "The fourth digit (1) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nnnnn.n litres",
      "start": "3150",
      "end": "3155",
      "title": "NET VOLUME (l)",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "01",
        "02"
      ],
      "excludes": [
        {
          "start": "3150",
          "end": "3155"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3152",
      "formatString": "N4+N6",
      "description": "Net volume, litres (variable measure trade item)",
      "regex": "(\\d{6})",
      "note": "The fourth digit (2) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nnnn.nn litres",
      "start": "3150",
      "end": "3155",
      "title": "NET VOLUME (l)",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "01",
        "02"
      ],
      "excludes": [
        {
          "start": "3150",
          "end": "3155"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3153",
      "formatString": "N4+N6",
      "description": "Net volume, litres (variable measure trade item)",
      "regex": "(\\d{6})",
      "note": "The fourth digit (3) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nnn.nnn litres",
      "start": "3150",
      "end": "3155",
      "title": "NET VOLUME (l)",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "01",
        "02"
      ],
      "excludes": [
        {
          "start": "3150",
          "end": "3155"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3154",
      "formatString": "N4+N6",
      "description": "Net volume, litres (variable measure trade item)",
      "regex": "(\\d{6})",
      "note": "The fourth digit (4) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nn.nnnn litres",
      "start": "3150",
      "end": "3155",
      "title": "NET VOLUME (l)",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "01",
        "02"
      ],
      "excludes": [
        {
          "start": "3150",
          "end": "3155"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3155",
      "formatString": "N4+N6",
      "description": "Net volume, litres (variable measure trade item)",
      "regex": "(\\d{6})",
      "note": "The fourth digit (5) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = n.nnnnn litres",
      "start": "3150",
      "end": "3155",
      "title": "NET VOLUME (l)",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "01",
        "02"
      ],
      "excludes": [
        {
          "start": "3150",
          "end": "3155"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3160",
      "formatString": "N4+N6",
      "description": "Net volume, cubic metres (variable measure trade item)",
      "regex": "(\\d{6})",
      "note": "The fourth digit (0) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nnnnnn cubic metres",
      "start": "3160",
      "end": "3165",
      "title": "NET VOLUME (m³)",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "01",
        "02"
      ],
      "excludes": [
        {
          "start": "3160",
          "end": "3165"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3161",
      "formatString": "N4+N6",
      "description": "Net volume, cubic metres (variable measure trade item)",
      "regex": "(\\d{6})",
      "note": "The fourth digit (1) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nnnnn.n cubic metres",
      "start": "3160",
      "end": "3165",
      "title": "NET VOLUME (m³)",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "01",
        "02"
      ],
      "excludes": [
        {
          "start": "3160",
          "end": "3165"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3162",
      "formatString": "N4+N6",
      "description": "Net volume, cubic metres (variable measure trade item)",
      "regex": "(\\d{6})",
      "note": "The fourth digit (2) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nnnn.nn cubic metres",
      "start": "3160",
      "end": "3165",
      "title": "NET VOLUME (m³)",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "01",
        "02"
      ],
      "excludes": [
        {
          "start": "3160",
          "end": "3165"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3163",
      "formatString": "N4+N6",
      "description": "Net volume, cubic metres (variable measure trade item)",
      "regex": "(\\d{6})",
      "note": "The fourth digit (3) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nnn.nnn cubic metres",
      "start": "3160",
      "end": "3165",
      "title": "NET VOLUME (m³)",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "01",
        "02"
      ],
      "excludes": [
        {
          "start": "3160",
          "end": "3165"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3164",
      "formatString": "N4+N6",
      "description": "Net volume, cubic metres (variable measure trade item)",
      "regex": "(\\d{6})",
      "note": "The fourth digit (4) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nn.nnnn cubic metres",
      "start": "3160",
      "end": "3165",
      "title": "NET VOLUME (m³)",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "01",
        "02"
      ],
      "excludes": [
        {
          "start": "3160",
          "end": "3165"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3165",
      "formatString": "N4+N6",
      "description": "Net volume, cubic metres (variable measure trade item)",
      "regex": "(\\d{6})",
      "note": "The fourth digit (5) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = n.nnnnn cubic metres",
      "start": "3160",
      "end": "3165",
      "title": "NET VOLUME (m³)",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "01",
        "02"
      ],
      "excludes": [
        {
          "start": "3160",
          "end": "3165"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3200",
      "formatString": "N4+N6",
      "description": "Net weight, pounds (variable measure trade item)",
      "regex": "(\\d{6})",
      "note": "The fourth digit (0) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nnnnnn pounds",
      "start": "3200",
      "end": "3205",
      "title": "NET WEIGHT (lb)",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "01",
        "02"
      ],
      "excludes": [
        {
          "start": "3200",
          "end": "3205"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3201",
      "formatString": "N4+N6",
      "description": "Net weight, pounds (variable measure trade item)",
      "regex": "(\\d{6})",
      "note": "The fourth digit (1) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nnnnn.n pounds",
      "start": "3200",
      "end": "3205",
      "title": "NET WEIGHT (lb)",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "01",
        "02"
      ],
      "excludes": [
        {
          "start": "3200",
          "end": "3205"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3202",
      "formatString": "N4+N6",
      "description": "Net weight, pounds (variable measure trade item)",
      "regex": "(\\d{6})",
      "note": "The fourth digit (2) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nnnn.nn pounds",
      "start": "3200",
      "end": "3205",
      "title": "NET WEIGHT (lb)",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "01",
        "02"
      ],
      "excludes": [
        {
          "start": "3200",
          "end": "3205"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3203",
      "formatString": "N4+N6",
      "description": "Net weight, pounds (variable measure trade item)",
      "regex": "(\\d{6})",
      "note": "The fourth digit (3) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nnn.nnn pounds",
      "start": "3200",
      "end": "3205",
      "title": "NET WEIGHT (lb)",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "01",
        "02"
      ],
      "excludes": [
        {
          "start": "3200",
          "end": "3205"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3204",
      "formatString": "N4+N6",
      "description": "Net weight, pounds (variable measure trade item)",
      "regex": "(\\d{6})",
      "note": "The fourth digit (4) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nn.nnnn pounds",
      "start": "3200",
      "end": "3205",
      "title": "NET WEIGHT (lb)",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "01",
        "02"
      ],
      "excludes": [
        {
          "start": "3200",
          "end": "3205"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3205",
      "formatString": "N4+N6",
      "description": "Net weight, pounds (variable measure trade item)",
      "regex": "(\\d{6})",
      "note": "The fourth digit (5) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = n.nnnnn pounds",
      "start": "3200",
      "end": "3205",
      "title": "NET WEIGHT (lb)",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "01",
        "02"
      ],
      "excludes": [
        {
          "start": "3200",
          "end": "3205"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3210",
      "formatString": "N4+N6",
      "description": "Length or first dimension, inches (variable measure trade item)",
      "regex": "(\\d{6})",
      "note": "The fourth digit (0) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nnnnnn inches",
      "start": "3210",
      "end": "3215",
      "title": "LENGTH (in)",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "01",
        "02"
      ],
      "excludes": [
        {
          "start": "3210",
          "end": "3215"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3211",
      "formatString": "N4+N6",
      "description": "Length or first dimension, inches (variable measure trade item)",
      "regex": "(\\d{6})",
      "note": "The fourth digit (1) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nnnnn.n inches",
      "start": "3210",
      "end": "3215",
      "title": "LENGTH (in)",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "01",
        "02"
      ],
      "excludes": [
        {
          "start": "3210",
          "end": "3215"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3212",
      "formatString": "N4+N6",
      "description": "Length or first dimension, inches (variable measure trade item)",
      "regex": "(\\d{6})",
      "note": "The fourth digit (2) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nnnn.nn inches",
      "start": "3210",
      "end": "3215",
      "title": "LENGTH (in)",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "01",
        "02"
      ],
      "excludes": [
        {
          "start": "3210",
          "end": "3215"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3213",
      "formatString": "N4+N6",
      "description": "Length or first dimension, inches (variable measure trade item)",
      "regex": "(\\d{6})",
      "note": "The fourth digit (3) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nnn.nnn inches",
      "start": "3210",
      "end": "3215",
      "title": "LENGTH (in)",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "01",
        "02"
      ],
      "excludes": [
        {
          "start": "3210",
          "end": "3215"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3214",
      "formatString": "N4+N6",
      "description": "Length or first dimension, inches (variable measure trade item)",
      "regex": "(\\d{6})",
      "note": "The fourth digit (4) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nn.nnnn inches",
      "start": "3210",
      "end": "3215",
      "title": "LENGTH (in)",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "01",
        "02"
      ],
      "excludes": [
        {
          "start": "3210",
          "end": "3215"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3215",
      "formatString": "N4+N6",
      "description": "Length or first dimension, inches (variable measure trade item)",
      "regex": "(\\d{6})",
      "note": "The fourth digit (5) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = n.nnnnn inches",
      "start": "3210",
      "end": "3215",
      "title": "LENGTH (in)",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "01",
        "02"
      ],
      "excludes": [
        {
          "start": "3210",
          "end": "3215"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3220",
      "formatString": "N4+N6",
      "description": "Length or first dimension, feet (variable measure trade item)",
      "regex": "(\\d{6})",
      "note": "The fourth digit (0) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nnnnnn feet",
      "start": "3220",
      "end": "3225",
      "title": "LENGTH (ft)",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "01",
        "02"
      ],
      "excludes": [
        {
          "start": "3220",
          "end": "3225"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3221",
      "formatString": "N4+N6",
      "description": "Length or first dimension, feet (variable measure trade item)",
      "regex": "(\\d{6})",
      "note": "The fourth digit (1) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nnnnn.n feet",
      "start": "3220",
      "end": "3225",
      "title": "LENGTH (ft)",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "01",
        "02"
      ],
      "excludes": [
        {
          "start": "3220",
          "end": "3225"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3222",
      "formatString": "N4+N6",
      "description": "Length or first dimension, feet (variable measure trade item)",
      "regex": "(\\d{6})",
      "note": "The fourth digit (2) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nnnn.nn feet",
      "start": "3220",
      "end": "3225",
      "title": "LENGTH (ft)",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "01",
        "02"
      ],
      "excludes": [
        {
          "start": "3220",
          "end": "3225"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3223",
      "formatString": "N4+N6",
      "description": "Length or first dimension, feet (variable measure trade item)",
      "regex": "(\\d{6})",
      "note": "The fourth digit (3) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nnn.nnn feet",
      "start": "3220",
      "end": "3225",
      "title": "LENGTH (ft)",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "01",
        "02"
      ],
      "excludes": [
        {
          "start": "3220",
          "end": "3225"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3224",
      "formatString": "N4+N6",
      "description": "Length or first dimension, feet (variable measure trade item)",
      "regex": "(\\d{6})",
      "note": "The fourth digit (4) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nn.nnnn feet",
      "start": "3220",
      "end": "3225",
      "title": "LENGTH (ft)",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "01",
        "02"
      ],
      "excludes": [
        {
          "start": "3220",
          "end": "3225"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3225",
      "formatString": "N4+N6",
      "description": "Length or first dimension, feet (variable measure trade item)",
      "regex": "(\\d{6})",
      "note": "The fourth digit (5) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = n.nnnnn feet",
      "start": "3220",
      "end": "3225",
      "title": "LENGTH (ft)",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "01",
        "02"
      ],
      "excludes": [
        {
          "start": "3220",
          "end": "3225"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3230",
      "formatString": "N4+N6",
      "description": "Length or first dimension, yards (variable measure trade item)",
      "regex": "(\\d{6})",
      "note": "The fourth digit (0) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nnnnnn yards",
      "start": "3230",
      "end": "3235",
      "title": "LENGTH (yd)",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "01",
        "02"
      ],
      "excludes": [
        {
          "start": "3230",
          "end": "3235"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3231",
      "formatString": "N4+N6",
      "description": "Length or first dimension, yards (variable measure trade item)",
      "regex": "(\\d{6})",
      "note": "The fourth digit (1) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nnnnn.n yards",
      "start": "3230",
      "end": "3235",
      "title": "LENGTH (yd)",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "01",
        "02"
      ],
      "excludes": [
        {
          "start": "3230",
          "end": "3235"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3232",
      "formatString": "N4+N6",
      "description": "Length or first dimension, yards (variable measure trade item)",
      "regex": "(\\d{6})",
      "note": "The fourth digit (2) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nnnn.nn yards",
      "start": "3230",
      "end": "3235",
      "title": "LENGTH (yd)",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "01",
        "02"
      ],
      "excludes": [
        {
          "start": "3230",
          "end": "3235"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3233",
      "formatString": "N4+N6",
      "description": "Length or first dimension, yards (variable measure trade item)",
      "regex": "(\\d{6})",
      "note": "The fourth digit (3) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nnn.nnn yards",
      "start": "3230",
      "end": "3235",
      "title": "LENGTH (yd)",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "01",
        "02"
      ],
      "excludes": [
        {
          "start": "3230",
          "end": "3235"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3234",
      "formatString": "N4+N6",
      "description": "Length or first dimension, yards (variable measure trade item)",
      "regex": "(\\d{6})",
      "note": "The fourth digit (4) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nn.nnnn yards",
      "start": "3230",
      "end": "3235",
      "title": "LENGTH (yd)",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "01",
        "02"
      ],
      "excludes": [
        {
          "start": "3230",
          "end": "3235"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3235",
      "formatString": "N4+N6",
      "description": "Length or first dimension, yards (variable measure trade item)",
      "regex": "(\\d{6})",
      "note": "The fourth digit (5) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = n.nnnnn yards",
      "start": "3230",
      "end": "3235",
      "title": "LENGTH (yd)",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "01",
        "02"
      ],
      "excludes": [
        {
          "start": "3230",
          "end": "3235"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3240",
      "formatString": "N4+N6",
      "description": "Width, diameter, or second dimension, inches (variable measure trade item)",
      "regex": "(\\d{6})",
      "note": "The fourth digit (0) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nnnnnn inches",
      "start": "3240",
      "end": "3245",
      "title": "WIDTH (in)",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "01",
        "02"
      ],
      "excludes": [
        {
          "start": "3240",
          "end": "3245"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3241",
      "formatString": "N4+N6",
      "description": "Width, diameter, or second dimension, inches (variable measure trade item)",
      "regex": "(\\d{6})",
      "note": "The fourth digit (1) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nnnnn.n inches",
      "start": "3240",
      "end": "3245",
      "title": "WIDTH (in)",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "01",
        "02"
      ],
      "excludes": [
        {
          "start": "3240",
          "end": "3245"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3242",
      "formatString": "N4+N6",
      "description": "Width, diameter, or second dimension, inches (variable measure trade item)",
      "regex": "(\\d{6})",
      "note": "The fourth digit (2) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nnnn.nn inches",
      "start": "3240",
      "end": "3245",
      "title": "WIDTH (in)",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "01",
        "02"
      ],
      "excludes": [
        {
          "start": "3240",
          "end": "3245"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3243",
      "formatString": "N4+N6",
      "description": "Width, diameter, or second dimension, inches (variable measure trade item)",
      "regex": "(\\d{6})",
      "note": "The fourth digit (3) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nnn.nnn inches",
      "start": "3240",
      "end": "3245",
      "title": "WIDTH (in)",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "01",
        "02"
      ],
      "excludes": [
        {
          "start": "3240",
          "end": "3245"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3244",
      "formatString": "N4+N6",
      "description": "Width, diameter, or second dimension, inches (variable measure trade item)",
      "regex": "(\\d{6})",
      "note": "The fourth digit (4) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nn.nnnn inches",
      "start": "3240",
      "end": "3245",
      "title": "WIDTH (in)",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "01",
        "02"
      ],
      "excludes": [
        {
          "start": "3240",
          "end": "3245"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3245",
      "formatString": "N4+N6",
      "description": "Width, diameter, or second dimension, inches (variable measure trade item)",
      "regex": "(\\d{6})",
      "note": "The fourth digit (5) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = n.nnnnn inches",
      "start": "3240",
      "end": "3245",
      "title": "WIDTH (in)",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "01",
        "02"
      ],
      "excludes": [
        {
          "start": "3240",
          "end": "3245"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3250",
      "formatString": "N4+N6",
      "description": "Width, diameter, or second dimension, feet (variable measure trade item)",
      "regex": "(\\d{6})",
      "note": "The fourth digit (0) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nnnnnn feet",
      "start": "3250",
      "end": "3255",
      "title": "WIDTH (ft)",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "01",
        "02"
      ],
      "excludes": [
        {
          "start": "3250",
          "end": "3255"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3251",
      "formatString": "N4+N6",
      "description": "Width, diameter, or second dimension, feet (variable measure trade item)",
      "regex": "(\\d{6})",
      "note": "The fourth digit (1) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nnnnn.n feet",
      "start": "3250",
      "end": "3255",
      "title": "WIDTH (ft)",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "01",
        "02"
      ],
      "excludes": [
        {
          "start": "3250",
          "end": "3255"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3252",
      "formatString": "N4+N6",
      "description": "Width, diameter, or second dimension, feet (variable measure trade item)",
      "regex": "(\\d{6})",
      "note": "The fourth digit (2) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nnnn.nn feet",
      "start": "3250",
      "end": "3255",
      "title": "WIDTH (ft)",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "01",
        "02"
      ],
      "excludes": [
        {
          "start": "3250",
          "end": "3255"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3253",
      "formatString": "N4+N6",
      "description": "Width, diameter, or second dimension, feet (variable measure trade item)",
      "regex": "(\\d{6})",
      "note": "The fourth digit (3) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nnn.nnn feet",
      "start": "3250",
      "end": "3255",
      "title": "WIDTH (ft)",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "01",
        "02"
      ],
      "excludes": [
        {
          "start": "3250",
          "end": "3255"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3254",
      "formatString": "N4+N6",
      "description": "Width, diameter, or second dimension, feet (variable measure trade item)",
      "regex": "(\\d{6})",
      "note": "The fourth digit (4) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nn.nnnn feet",
      "start": "3250",
      "end": "3255",
      "title": "WIDTH (ft)",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "01",
        "02"
      ],
      "excludes": [
        {
          "start": "3250",
          "end": "3255"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3255",
      "formatString": "N4+N6",
      "description": "Width, diameter, or second dimension, feet (variable measure trade item)",
      "regex": "(\\d{6})",
      "note": "The fourth digit (5) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = n.nnnnn feet",
      "start": "3250",
      "end": "3255",
      "title": "WIDTH (ft)",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "01",
        "02"
      ],
      "excludes": [
        {
          "start": "3250",
          "end": "3255"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3260",
      "formatString": "N4+N6",
      "description": "Width, diameter, or second dimension, yards (variable measure trade item)",
      "regex": "(\\d{6})",
      "note": "The fourth digit (0) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nnnnnn yards",
      "start": "3260",
      "end": "3265",
      "title": "WIDTH (yd)",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "01",
        "02"
      ],
      "excludes": [
        {
          "start": "3260",
          "end": "3265"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3261",
      "formatString": "N4+N6",
      "description": "Width, diameter, or second dimension, yards (variable measure trade item)",
      "regex": "(\\d{6})",
      "note": "The fourth digit (1) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nnnnn.n yards",
      "start": "3260",
      "end": "3265",
      "title": "WIDTH (yd)",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "01",
        "02"
      ],
      "excludes": [
        {
          "start": "3260",
          "end": "3265"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3262",
      "formatString": "N4+N6",
      "description": "Width, diameter, or second dimension, yards (variable measure trade item)",
      "regex": "(\\d{6})",
      "note": "The fourth digit (2) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nnnn.nn yards",
      "start": "3260",
      "end": "3265",
      "title": "WIDTH (yd)",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "01",
        "02"
      ],
      "excludes": [
        {
          "start": "3260",
          "end": "3265"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3263",
      "formatString": "N4+N6",
      "description": "Width, diameter, or second dimension, yards (variable measure trade item)",
      "regex": "(\\d{6})",
      "note": "The fourth digit (3) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nnn.nnn yards",
      "start": "3260",
      "end": "3265",
      "title": "WIDTH (yd)",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "01",
        "02"
      ],
      "excludes": [
        {
          "start": "3260",
          "end": "3265"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3264",
      "formatString": "N4+N6",
      "description": "Width, diameter, or second dimension, yards (variable measure trade item)",
      "regex": "(\\d{6})",
      "note": "The fourth digit (4) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nn.nnnn yards",
      "start": "3260",
      "end": "3265",
      "title": "WIDTH (yd)",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "01",
        "02"
      ],
      "excludes": [
        {
          "start": "3260",
          "end": "3265"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3265",
      "formatString": "N4+N6",
      "description": "Width, diameter, or second dimension, yards (variable measure trade item)",
      "regex": "(\\d{6})",
      "note": "The fourth digit (5) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = n.nnnnn yards",
      "start": "3260",
      "end": "3265",
      "title": "WIDTH (yd)",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "01",
        "02"
      ],
      "excludes": [
        {
          "start": "3260",
          "end": "3265"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3270",
      "formatString": "N4+N6",
      "description": "Depth, thickness, height, or third dimension, inches (variable measure trade item)",
      "regex": "(\\d{6})",
      "note": "The fourth digit (0) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nnnnnn inches",
      "start": "3270",
      "end": "3275",
      "title": "HEIGHT (in)",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "01",
        "02"
      ],
      "excludes": [
        {
          "start": "3270",
          "end": "3275"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3271",
      "formatString": "N4+N6",
      "description": "Depth, thickness, height, or third dimension, inches (variable measure trade item)",
      "regex": "(\\d{6})",
      "note": "The fourth digit (1) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nnnnn.n inches",
      "start": "3270",
      "end": "3275",
      "title": "HEIGHT (in)",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "01",
        "02"
      ],
      "excludes": [
        {
          "start": "3270",
          "end": "3275"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3272",
      "formatString": "N4+N6",
      "description": "Depth, thickness, height, or third dimension, inches (variable measure trade item)",
      "regex": "(\\d{6})",
      "note": "The fourth digit (2) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nnnn.nn inches",
      "start": "3270",
      "end": "3275",
      "title": "HEIGHT (in)",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "01",
        "02"
      ],
      "excludes": [
        {
          "start": "3270",
          "end": "3275"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3273",
      "formatString": "N4+N6",
      "description": "Depth, thickness, height, or third dimension, inches (variable measure trade item)",
      "regex": "(\\d{6})",
      "note": "The fourth digit (3) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nnn.nnn inches",
      "start": "3270",
      "end": "3275",
      "title": "HEIGHT (in)",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "01",
        "02"
      ],
      "excludes": [
        {
          "start": "3270",
          "end": "3275"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3274",
      "formatString": "N4+N6",
      "description": "Depth, thickness, height, or third dimension, inches (variable measure trade item)",
      "regex": "(\\d{6})",
      "note": "The fourth digit (4) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nn.nnnn inches",
      "start": "3270",
      "end": "3275",
      "title": "HEIGHT (in)",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "01",
        "02"
      ],
      "excludes": [
        {
          "start": "3270",
          "end": "3275"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3275",
      "formatString": "N4+N6",
      "description": "Depth, thickness, height, or third dimension, inches (variable measure trade item)",
      "regex": "(\\d{6})",
      "note": "The fourth digit (5) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = n.nnnnn inches",
      "start": "3270",
      "end": "3275",
      "title": "HEIGHT (in)",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "01",
        "02"
      ],
      "excludes": [
        {
          "start": "3270",
          "end": "3275"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3280",
      "formatString": "N4+N6",
      "description": "Depth, thickness, height, or third dimension, feet (variable measure trade item)",
      "regex": "(\\d{6})",
      "note": "The fourth digit (0) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nnnnnn feet",
      "start": "3280",
      "end": "3285",
      "title": "HEIGHT (ft)",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "01",
        "02"
      ],
      "excludes": [
        {
          "start": "3280",
          "end": "3285"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3281",
      "formatString": "N4+N6",
      "description": "Depth, thickness, height, or third dimension, feet (variable measure trade item)",
      "regex": "(\\d{6})",
      "note": "The fourth digit (1) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nnnnn.n feet",
      "start": "3280",
      "end": "3285",
      "title": "HEIGHT (ft)",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "01",
        "02"
      ],
      "excludes": [
        {
          "start": "3280",
          "end": "3285"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3282",
      "formatString": "N4+N6",
      "description": "Depth, thickness, height, or third dimension, feet (variable measure trade item)",
      "regex": "(\\d{6})",
      "note": "The fourth digit (2) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nnnn.nn feet",
      "start": "3280",
      "end": "3285",
      "title": "HEIGHT (ft)",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "01",
        "02"
      ],
      "excludes": [
        {
          "start": "3280",
          "end": "3285"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3283",
      "formatString": "N4+N6",
      "description": "Depth, thickness, height, or third dimension, feet (variable measure trade item)",
      "regex": "(\\d{6})",
      "note": "The fourth digit (3) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nnn.nnn feet",
      "start": "3280",
      "end": "3285",
      "title": "HEIGHT (ft)",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "01",
        "02"
      ],
      "excludes": [
        {
          "start": "3280",
          "end": "3285"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3284",
      "formatString": "N4+N6",
      "description": "Depth, thickness, height, or third dimension, feet (variable measure trade item)",
      "regex": "(\\d{6})",
      "note": "The fourth digit (4) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nn.nnnn feet",
      "start": "3280",
      "end": "3285",
      "title": "HEIGHT (ft)",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "01",
        "02"
      ],
      "excludes": [
        {
          "start": "3280",
          "end": "3285"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3285",
      "formatString": "N4+N6",
      "description": "Depth, thickness, height, or third dimension, feet (variable measure trade item)",
      "regex": "(\\d{6})",
      "note": "The fourth digit (5) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = n.nnnnn feet",
      "start": "3280",
      "end": "3285",
      "title": "HEIGHT (ft)",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "01",
        "02"
      ],
      "excludes": [
        {
          "start": "3280",
          "end": "3285"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3290",
      "formatString": "N4+N6",
      "description": "Depth, thickness, height, or third dimension, yards (variable measure trade item)",
      "regex": "(\\d{6})",
      "note": "The fourth digit (0) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nnnnnn yards",
      "start": "3290",
      "end": "3295",
      "title": "HEIGHT (yd)",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "01",
        "02"
      ],
      "excludes": [
        {
          "start": "3290",
          "end": "3295"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3291",
      "formatString": "N4+N6",
      "description": "Depth, thickness, height, or third dimension, yards (variable measure trade item)",
      "regex": "(\\d{6})",
      "note": "The fourth digit (1) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nnnnn.n yards",
      "start": "3290",
      "end": "3295",
      "title": "HEIGHT (yd)",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "01",
        "02"
      ],
      "excludes": [
        {
          "start": "3290",
          "end": "3295"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3292",
      "formatString": "N4+N6",
      "description": "Depth, thickness, height, or third dimension, yards (variable measure trade item)",
      "regex": "(\\d{6})",
      "note": "The fourth digit (2) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nnnn.nn yards",
      "start": "3290",
      "end": "3295",
      "title": "HEIGHT (yd)",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "01",
        "02"
      ],
      "excludes": [
        {
          "start": "3290",
          "end": "3295"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3293",
      "formatString": "N4+N6",
      "description": "Depth, thickness, height, or third dimension, yards (variable measure trade item)",
      "regex": "(\\d{6})",
      "note": "The fourth digit (3) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nnn.nnn yards",
      "start": "3290",
      "end": "3295",
      "title": "HEIGHT (yd)",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "01",
        "02"
      ],
      "excludes": [
        {
          "start": "3290",
          "end": "3295"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3294",
      "formatString": "N4+N6",
      "description": "Depth, thickness, height, or third dimension, yards (variable measure trade item)",
      "regex": "(\\d{6})",
      "note": "The fourth digit (4) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nn.nnnn yards",
      "start": "3290",
      "end": "3295",
      "title": "HEIGHT (yd)",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "01",
        "02"
      ],
      "excludes": [
        {
          "start": "3290",
          "end": "3295"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3295",
      "formatString": "N4+N6",
      "description": "Depth, thickness, height, or third dimension, yards (variable measure trade item)",
      "regex": "(\\d{6})",
      "note": "The fourth digit (5) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = n.nnnnn yards",
      "start": "3290",
      "end": "3295",
      "title": "HEIGHT (yd)",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "01",
        "02"
      ],
      "excludes": [
        {
          "start": "3290",
          "end": "3295"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3300",
      "formatString": "N4+N6",
      "description": "Logistic weight, kilograms",
      "regex": "(\\d{6})",
      "note": "The fourth digit (0) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nnnnnn kilograms",
      "start": "3300",
      "end": "3305",
      "title": "GROSS WEIGHT (kg)",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "00",
        "01"
      ],
      "excludes": [
        {
          "start": "3300",
          "end": "3305"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3301",
      "formatString": "N4+N6",
      "description": "Logistic weight, kilograms",
      "regex": "(\\d{6})",
      "note": "The fourth digit (1) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nnnnn.n kilograms",
      "start": "3300",
      "end": "3305",
      "title": "GROSS WEIGHT (kg)",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "00",
        "01"
      ],
      "excludes": [
        {
          "start": "3300",
          "end": "3305"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3302",
      "formatString": "N4+N6",
      "description": "Logistic weight, kilograms",
      "regex": "(\\d{6})",
      "note": "The fourth digit (2) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nnnn.nn kilograms",
      "start": "3300",
      "end": "3305",
      "title": "GROSS WEIGHT (kg)",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "00",
        "01"
      ],
      "excludes": [
        {
          "start": "3300",
          "end": "3305"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3303",
      "formatString": "N4+N6",
      "description": "Logistic weight, kilograms",
      "regex": "(\\d{6})",
      "note": "The fourth digit (3) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nnn.nnn kilograms",
      "start": "3300",
      "end": "3305",
      "title": "GROSS WEIGHT (kg)",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "00",
        "01"
      ],
      "excludes": [
        {
          "start": "3300",
          "end": "3305"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3304",
      "formatString": "N4+N6",
      "description": "Logistic weight, kilograms",
      "regex": "(\\d{6})",
      "note": "The fourth digit (4) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nn.nnnn kilograms",
      "start": "3300",
      "end": "3305",
      "title": "GROSS WEIGHT (kg)",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "00",
        "01"
      ],
      "excludes": [
        {
          "start": "3300",
          "end": "3305"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3305",
      "formatString": "N4+N6",
      "description": "Logistic weight, kilograms",
      "regex": "(\\d{6})",
      "note": "The fourth digit (5) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = n.nnnnn kilograms",
      "start": "3300",
      "end": "3305",
      "title": "GROSS WEIGHT (kg)",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "00",
        "01"
      ],
      "excludes": [
        {
          "start": "3300",
          "end": "3305"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3310",
      "formatString": "N4+N6",
      "description": "Length or first dimension, metres",
      "regex": "(\\d{6})",
      "note": "The fourth digit (0) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nnnnnn metres",
      "start": "3310",
      "end": "3315",
      "title": "LENGTH (m), log",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "00",
        "01"
      ],
      "excludes": [
        {
          "start": "3310",
          "end": "3315"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3311",
      "formatString": "N4+N6",
      "description": "Length or first dimension, metres",
      "regex": "(\\d{6})",
      "note": "The fourth digit (1) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nnnnn.n metres",
      "start": "3310",
      "end": "3315",
      "title": "LENGTH (m), log",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "00",
        "01"
      ],
      "excludes": [
        {
          "start": "3310",
          "end": "3315"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3312",
      "formatString": "N4+N6",
      "description": "Length or first dimension, metres",
      "regex": "(\\d{6})",
      "note": "The fourth digit (2) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nnnn.nn metres",
      "start": "3310",
      "end": "3315",
      "title": "LENGTH (m), log",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "00",
        "01"
      ],
      "excludes": [
        {
          "start": "3310",
          "end": "3315"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3313",
      "formatString": "N4+N6",
      "description": "Length or first dimension, metres",
      "regex": "(\\d{6})",
      "note": "The fourth digit (3) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nnn.nnn metres",
      "start": "3310",
      "end": "3315",
      "title": "LENGTH (m), log",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "00",
        "01"
      ],
      "excludes": [
        {
          "start": "3310",
          "end": "3315"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3314",
      "formatString": "N4+N6",
      "description": "Length or first dimension, metres",
      "regex": "(\\d{6})",
      "note": "The fourth digit (4) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nn.nnnn metres",
      "start": "3310",
      "end": "3315",
      "title": "LENGTH (m), log",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "00",
        "01"
      ],
      "excludes": [
        {
          "start": "3310",
          "end": "3315"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3315",
      "formatString": "N4+N6",
      "description": "Length or first dimension, metres",
      "regex": "(\\d{6})",
      "note": "The fourth digit (5) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = n.nnnnn metres",
      "start": "3310",
      "end": "3315",
      "title": "LENGTH (m), log",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "00",
        "01"
      ],
      "excludes": [
        {
          "start": "3310",
          "end": "3315"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3320",
      "formatString": "N4+N6",
      "description": "Width, diameter, or second dimension, metres",
      "regex": "(\\d{6})",
      "note": "The fourth digit (0) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nnnnnn metres",
      "start": "3320",
      "end": "3325",
      "title": "WIDTH (m), log",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "00",
        "01"
      ],
      "excludes": [
        {
          "start": "3320",
          "end": "3325"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3321",
      "formatString": "N4+N6",
      "description": "Width, diameter, or second dimension, metres",
      "regex": "(\\d{6})",
      "note": "The fourth digit (1) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nnnnn.n metres",
      "start": "3320",
      "end": "3325",
      "title": "WIDTH (m), log",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "00",
        "01"
      ],
      "excludes": [
        {
          "start": "3320",
          "end": "3325"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3322",
      "formatString": "N4+N6",
      "description": "Width, diameter, or second dimension, metres",
      "regex": "(\\d{6})",
      "note": "The fourth digit (2) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nnnn.nn metres",
      "start": "3320",
      "end": "3325",
      "title": "WIDTH (m), log",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "00",
        "01"
      ],
      "excludes": [
        {
          "start": "3320",
          "end": "3325"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3323",
      "formatString": "N4+N6",
      "description": "Width, diameter, or second dimension, metres",
      "regex": "(\\d{6})",
      "note": "The fourth digit (3) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nnn.nnn metres",
      "start": "3320",
      "end": "3325",
      "title": "WIDTH (m), log",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "00",
        "01"
      ],
      "excludes": [
        {
          "start": "3320",
          "end": "3325"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3324",
      "formatString": "N4+N6",
      "description": "Width, diameter, or second dimension, metres",
      "regex": "(\\d{6})",
      "note": "The fourth digit (4) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nn.nnnn metres",
      "start": "3320",
      "end": "3325",
      "title": "WIDTH (m), log",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "00",
        "01"
      ],
      "excludes": [
        {
          "start": "3320",
          "end": "3325"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3325",
      "formatString": "N4+N6",
      "description": "Width, diameter, or second dimension, metres",
      "regex": "(\\d{6})",
      "note": "The fourth digit (5) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = n.nnnnn metres",
      "start": "3320",
      "end": "3325",
      "title": "WIDTH (m), log",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "00",
        "01"
      ],
      "excludes": [
        {
          "start": "3320",
          "end": "3325"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3330",
      "formatString": "N4+N6",
      "description": "Depth, thickness, height, or third dimension, metres",
      "regex": "(\\d{6})",
      "note": "The fourth digit (0) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nnnnnn metres",
      "start": "3330",
      "end": "3335",
      "title": "HEIGHT (m), log",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "00",
        "01"
      ],
      "excludes": [
        {
          "start": "3330",
          "end": "3335"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3331",
      "formatString": "N4+N6",
      "description": "Depth, thickness, height, or third dimension, metres",
      "regex": "(\\d{6})",
      "note": "The fourth digit (1) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nnnnn.n metres",
      "start": "3330",
      "end": "3335",
      "title": "HEIGHT (m), log",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "00",
        "01"
      ],
      "excludes": [
        {
          "start": "3330",
          "end": "3335"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3332",
      "formatString": "N4+N6",
      "description": "Depth, thickness, height, or third dimension, metres",
      "regex": "(\\d{6})",
      "note": "The fourth digit (2) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nnnn.nn metres",
      "start": "3330",
      "end": "3335",
      "title": "HEIGHT (m), log",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "00",
        "01"
      ],
      "excludes": [
        {
          "start": "3330",
          "end": "3335"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3333",
      "formatString": "N4+N6",
      "description": "Depth, thickness, height, or third dimension, metres",
      "regex": "(\\d{6})",
      "note": "The fourth digit (3) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nnn.nnn metres",
      "start": "3330",
      "end": "3335",
      "title": "HEIGHT (m), log",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "00",
        "01"
      ],
      "excludes": [
        {
          "start": "3330",
          "end": "3335"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3334",
      "formatString": "N4+N6",
      "description": "Depth, thickness, height, or third dimension, metres",
      "regex": "(\\d{6})",
      "note": "The fourth digit (4) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nn.nnnn metres",
      "start": "3330",
      "end": "3335",
      "title": "HEIGHT (m), log",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "00",
        "01"
      ],
      "excludes": [
        {
          "start": "3330",
          "end": "3335"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3335",
      "formatString": "N4+N6",
      "description": "Depth, thickness, height, or third dimension, metres",
      "regex": "(\\d{6})",
      "note": "The fourth digit (5) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = n.nnnnn metres",
      "start": "3330",
      "end": "3335",
      "title": "HEIGHT (m), log",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "00",
        "01"
      ],
      "excludes": [
        {
          "start": "3330",
          "end": "3335"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3340",
      "formatString": "N4+N6",
      "description": "Area, square metres",
      "regex": "(\\d{6})",
      "note": "The fourth digit (0) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nnnnnn square metres",
      "start": "3340",
      "end": "3345",
      "title": "AREA (m²), log",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "00",
        "01"
      ],
      "excludes": [
        {
          "start": "3340",
          "end": "3345"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3341",
      "formatString": "N4+N6",
      "description": "Area, square metres",
      "regex": "(\\d{6})",
      "note": "The fourth digit (1) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nnnnn.n square metres",
      "start": "3340",
      "end": "3345",
      "title": "AREA (m²), log",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "00",
        "01"
      ],
      "excludes": [
        {
          "start": "3340",
          "end": "3345"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3342",
      "formatString": "N4+N6",
      "description": "Area, square metres",
      "regex": "(\\d{6})",
      "note": "The fourth digit (2) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nnnn.nn square metres",
      "start": "3340",
      "end": "3345",
      "title": "AREA (m²), log",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "00",
        "01"
      ],
      "excludes": [
        {
          "start": "3340",
          "end": "3345"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3343",
      "formatString": "N4+N6",
      "description": "Area, square metres",
      "regex": "(\\d{6})",
      "note": "The fourth digit (3) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nnn.nnn square metres",
      "start": "3340",
      "end": "3345",
      "title": "AREA (m²), log",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "00",
        "01"
      ],
      "excludes": [
        {
          "start": "3340",
          "end": "3345"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3344",
      "formatString": "N4+N6",
      "description": "Area, square metres",
      "regex": "(\\d{6})",
      "note": "The fourth digit (4) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nn.nnnn square metres",
      "start": "3340",
      "end": "3345",
      "title": "AREA (m²), log",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "00",
        "01"
      ],
      "excludes": [
        {
          "start": "3340",
          "end": "3345"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3345",
      "formatString": "N4+N6",
      "description": "Area, square metres",
      "regex": "(\\d{6})",
      "note": "The fourth digit (5) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = n.nnnnn square metres",
      "start": "3340",
      "end": "3345",
      "title": "AREA (m²), log",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "00",
        "01"
      ],
      "excludes": [
        {
          "start": "3340",
          "end": "3345"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3350",
      "formatString": "N4+N6",
      "description": "Logistic volume, litres",
      "regex": "(\\d{6})",
      "note": "The fourth digit (0) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nnnnnn litres",
      "start": "3350",
      "end": "3355",
      "title": "VOLUME (l), log",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "00",
        "01"
      ],
      "excludes": [
        {
          "start": "3350",
          "end": "3355"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3351",
      "formatString": "N4+N6",
      "description": "Logistic volume, litres",
      "regex": "(\\d{6})",
      "note": "The fourth digit (1) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nnnnn.n litres",
      "start": "3350",
      "end": "3355",
      "title": "VOLUME (l), log",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "00",
        "01"
      ],
      "excludes": [
        {
          "start": "3350",
          "end": "3355"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3352",
      "formatString": "N4+N6",
      "description": "Logistic volume, litres",
      "regex": "(\\d{6})",
      "note": "The fourth digit (2) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nnnn.nn litres",
      "start": "3350",
      "end": "3355",
      "title": "VOLUME (l), log",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "00",
        "01"
      ],
      "excludes": [
        {
          "start": "3350",
          "end": "3355"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3353",
      "formatString": "N4+N6",
      "description": "Logistic volume, litres",
      "regex": "(\\d{6})",
      "note": "The fourth digit (3) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nnn.nnn litres",
      "start": "3350",
      "end": "3355",
      "title": "VOLUME (l), log",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "00",
        "01"
      ],
      "excludes": [
        {
          "start": "3350",
          "end": "3355"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3354",
      "formatString": "N4+N6",
      "description": "Logistic volume, litres",
      "regex": "(\\d{6})",
      "note": "The fourth digit (4) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nn.nnnn litres",
      "start": "3350",
      "end": "3355",
      "title": "VOLUME (l), log",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "00",
        "01"
      ],
      "excludes": [
        {
          "start": "3350",
          "end": "3355"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3355",
      "formatString": "N4+N6",
      "description": "Logistic volume, litres",
      "regex": "(\\d{6})",
      "note": "The fourth digit (5) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = n.nnnnn litres",
      "start": "3350",
      "end": "3355",
      "title": "VOLUME (l), log",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "00",
        "01"
      ],
      "excludes": [
        {
          "start": "3350",
          "end": "3355"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3360",
      "formatString": "N4+N6",
      "description": "Logistic volume, cubic metres",
      "regex": "(\\d{6})",
      "note": "The fourth digit (0) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nnnnnn cubic metres",
      "start": "3360",
      "end": "3365",
      "title": "VOLUME (m³), log",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "00",
        "01"
      ],
      "excludes": [
        {
          "start": "3360",
          "end": "3365"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3361",
      "formatString": "N4+N6",
      "description": "Logistic volume, cubic metres",
      "regex": "(\\d{6})",
      "note": "The fourth digit (1) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nnnnn.n cubic metres",
      "start": "3360",
      "end": "3365",
      "title": "VOLUME (m³), log",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "00",
        "01"
      ],
      "excludes": [
        {
          "start": "3360",
          "end": "3365"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3362",
      "formatString": "N4+N6",
      "description": "Logistic volume, cubic metres",
      "regex": "(\\d{6})",
      "note": "The fourth digit (2) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nnnn.nn cubic metres",
      "start": "3360",
      "end": "3365",
      "title": "VOLUME (m³), log",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "00",
        "01"
      ],
      "excludes": [
        {
          "start": "3360",
          "end": "3365"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3363",
      "formatString": "N4+N6",
      "description": "Logistic volume, cubic metres",
      "regex": "(\\d{6})",
      "note": "The fourth digit (3) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nnn.nnn cubic metres",
      "start": "3360",
      "end": "3365",
      "title": "VOLUME (m³), log",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "00",
        "01"
      ],
      "excludes": [
        {
          "start": "3360",
          "end": "3365"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3364",
      "formatString": "N4+N6",
      "description": "Logistic volume, cubic metres",
      "regex": "(\\d{6})",
      "note": "The fourth digit (4) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nn.nnnn cubic metres",
      "start": "3360",
      "end": "3365",
      "title": "VOLUME (m³), log",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "00",
        "01"
      ],
      "excludes": [
        {
          "start": "3360",
          "end": "3365"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3365",
      "formatString": "N4+N6",
      "description": "Logistic volume, cubic metres",
      "regex": "(\\d{6})",
      "note": "The fourth digit (5) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = n.nnnnn cubic metres",
      "start": "3360",
      "end": "3365",
      "title": "VOLUME (m³), log",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "00",
        "01"
      ],
      "excludes": [
        {
          "start": "3360",
          "end": "3365"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3370",
      "formatString": "N4+N6",
      "description": "Kilograms per square metre",
      "regex": "(\\d{6})",
      "note": "The fourth digit (0) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nnnnnn kilograms per square metre",
      "start": "3370",
      "end": "3375",
      "title": "KG PER m²",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "01"
      ],
      "excludes": [
        {
          "start": "3370",
          "end": "3375"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3371",
      "formatString": "N4+N6",
      "description": "Kilograms per square metre",
      "regex": "(\\d{6})",
      "note": "The fourth digit (1) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nnnnn.n kilograms per square metre",
      "start": "3370",
      "end": "3375",
      "title": "KG PER m²",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "01"
      ],
      "excludes": [
        {
          "start": "3370",
          "end": "3375"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3372",
      "formatString": "N4+N6",
      "description": "Kilograms per square metre",
      "regex": "(\\d{6})",
      "note": "The fourth digit (2) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nnnn.nn kilograms per square metre",
      "start": "3370",
      "end": "3375",
      "title": "KG PER m²",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "01"
      ],
      "excludes": [
        {
          "start": "3370",
          "end": "3375"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3373",
      "formatString": "N4+N6",
      "description": "Kilograms per square metre",
      "regex": "(\\d{6})",
      "note": "The fourth digit (3) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nnn.nnn kilograms per square metre",
      "start": "3370",
      "end": "3375",
      "title": "KG PER m²",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "01"
      ],
      "excludes": [
        {
          "start": "3370",
          "end": "3375"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3374",
      "formatString": "N4+N6",
      "description": "Kilograms per square metre",
      "regex": "(\\d{6})",
      "note": "The fourth digit (4) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nn.nnnn kilograms per square metre",
      "start": "3370",
      "end": "3375",
      "title": "KG PER m²",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "01"
      ],
      "excludes": [
        {
          "start": "3370",
          "end": "3375"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3375",
      "formatString": "N4+N6",
      "description": "Kilograms per square metre",
      "regex": "(\\d{6})",
      "note": "The fourth digit (5) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = n.nnnnn kilograms per square metre",
      "start": "3370",
      "end": "3375",
      "title": "KG PER m²",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "01"
      ],
      "excludes": [
        {
          "start": "3370",
          "end": "3375"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3400",
      "formatString": "N4+N6",
      "description": "Logistic weight, pounds",
      "regex": "(\\d{6})",
      "note": "The fourth digit (0) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nnnnnn pounds",
      "start": "3400",
      "end": "3405",
      "title": "GROSS WEIGHT (lb)",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "00",
        "01"
      ],
      "excludes": [
        {
          "start": "3400",
          "end": "3405"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3401",
      "formatString": "N4+N6",
      "description": "Logistic weight, pounds",
      "regex": "(\\d{6})",
      "note": "The fourth digit (1) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nnnnn.n pounds",
      "start": "3400",
      "end": "3405",
      "title": "GROSS WEIGHT (lb)",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "00",
        "01"
      ],
      "excludes": [
        {
          "start": "3400",
          "end": "3405"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3402",
      "formatString": "N4+N6",
      "description": "Logistic weight, pounds",
      "regex": "(\\d{6})",
      "note": "The fourth digit (2) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nnnn.nn pounds",
      "start": "3400",
      "end": "3405",
      "title": "GROSS WEIGHT (lb)",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "00",
        "01"
      ],
      "excludes": [
        {
          "start": "3400",
          "end": "3405"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3403",
      "formatString": "N4+N6",
      "description": "Logistic weight, pounds",
      "regex": "(\\d{6})",
      "note": "The fourth digit (3) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nnn.nnn pounds",
      "start": "3400",
      "end": "3405",
      "title": "GROSS WEIGHT (lb)",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "00",
        "01"
      ],
      "excludes": [
        {
          "start": "3400",
          "end": "3405"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3404",
      "formatString": "N4+N6",
      "description": "Logistic weight, pounds",
      "regex": "(\\d{6})",
      "note": "The fourth digit (4) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nn.nnnn pounds",
      "start": "3400",
      "end": "3405",
      "title": "GROSS WEIGHT (lb)",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "00",
        "01"
      ],
      "excludes": [
        {
          "start": "3400",
          "end": "3405"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3405",
      "formatString": "N4+N6",
      "description": "Logistic weight, pounds",
      "regex": "(\\d{6})",
      "note": "The fourth digit (5) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = n.nnnnn pounds",
      "start": "3400",
      "end": "3405",
      "title": "GROSS WEIGHT (lb)",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "00",
        "01"
      ],
      "excludes": [
        {
          "start": "3400",
          "end": "3405"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3410",
      "formatString": "N4+N6",
      "description": "Length or first dimension, inches",
      "regex": "(\\d{6})",
      "note": "The fourth digit (0) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nnnnnn inches",
      "start": "3410",
      "end": "3415",
      "title": "LENGTH (in), log",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "00",
        "01"
      ],
      "excludes": [
        {
          "start": "3410",
          "end": "3415"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3411",
      "formatString": "N4+N6",
      "description": "Length or first dimension, inches",
      "regex": "(\\d{6})",
      "note": "The fourth digit (1) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nnnnn.n inches",
      "start": "3410",
      "end": "3415",
      "title": "LENGTH (in), log",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "00",
        "01"
      ],
      "excludes": [
        {
          "start": "3410",
          "end": "3415"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3412",
      "formatString": "N4+N6",
      "description": "Length or first dimension, inches",
      "regex": "(\\d{6})",
      "note": "The fourth digit (2) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nnnn.nn inches",
      "start": "3410",
      "end": "3415",
      "title": "LENGTH (in), log",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "00",
        "01"
      ],
      "excludes": [
        {
          "start": "3410",
          "end": "3415"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3413",
      "formatString": "N4+N6",
      "description": "Length or first dimension, inches",
      "regex": "(\\d{6})",
      "note": "The fourth digit (3) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nnn.nnn inches",
      "start": "3410",
      "end": "3415",
      "title": "LENGTH (in), log",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "00",
        "01"
      ],
      "excludes": [
        {
          "start": "3410",
          "end": "3415"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3414",
      "formatString": "N4+N6",
      "description": "Length or first dimension, inches",
      "regex": "(\\d{6})",
      "note": "The fourth digit (4) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nn.nnnn inches",
      "start": "3410",
      "end": "3415",
      "title": "LENGTH (in), log",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "00",
        "01"
      ],
      "excludes": [
        {
          "start": "3410",
          "end": "3415"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3415",
      "formatString": "N4+N6",
      "description": "Length or first dimension, inches",
      "regex": "(\\d{6})",
      "note": "The fourth digit (5) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = n.nnnnn inches",
      "start": "3410",
      "end": "3415",
      "title": "LENGTH (in), log",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "00",
        "01"
      ],
      "excludes": [
        {
          "start": "3410",
          "end": "3415"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3420",
      "formatString": "N4+N6",
      "description": "Length or first dimension, feet",
      "regex": "(\\d{6})",
      "note": "The fourth digit (0) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nnnnnn feet",
      "start": "3420",
      "end": "3425",
      "title": "LENGTH (ft), log",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "00",
        "01"
      ],
      "excludes": [
        {
          "start": "3420",
          "end": "3425"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3421",
      "formatString": "N4+N6",
      "description": "Length or first dimension, feet",
      "regex": "(\\d{6})",
      "note": "The fourth digit (1) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nnnnn.n feet",
      "start": "3420",
      "end": "3425",
      "title": "LENGTH (ft), log",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "00",
        "01"
      ],
      "excludes": [
        {
          "start": "3420",
          "end": "3425"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3422",
      "formatString": "N4+N6",
      "description": "Length or first dimension, feet",
      "regex": "(\\d{6})",
      "note": "The fourth digit (2) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nnnn.nn feet",
      "start": "3420",
      "end": "3425",
      "title": "LENGTH (ft), log",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "00",
        "01"
      ],
      "excludes": [
        {
          "start": "3420",
          "end": "3425"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3423",
      "formatString": "N4+N6",
      "description": "Length or first dimension, feet",
      "regex": "(\\d{6})",
      "note": "The fourth digit (3) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nnn.nnn feet",
      "start": "3420",
      "end": "3425",
      "title": "LENGTH (ft), log",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "00",
        "01"
      ],
      "excludes": [
        {
          "start": "3420",
          "end": "3425"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3424",
      "formatString": "N4+N6",
      "description": "Length or first dimension, feet",
      "regex": "(\\d{6})",
      "note": "The fourth digit (4) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nn.nnnn feet",
      "start": "3420",
      "end": "3425",
      "title": "LENGTH (ft), log",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "00",
        "01"
      ],
      "excludes": [
        {
          "start": "3420",
          "end": "3425"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3425",
      "formatString": "N4+N6",
      "description": "Length or first dimension, feet",
      "regex": "(\\d{6})",
      "note": "The fourth digit (5) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = n.nnnnn feet",
      "start": "3420",
      "end": "3425",
      "title": "LENGTH (ft), log",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "00",
        "01"
      ],
      "excludes": [
        {
          "start": "3420",
          "end": "3425"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3430",
      "formatString": "N4+N6",
      "description": "Length or first dimension, yards",
      "regex": "(\\d{6})",
      "note": "The fourth digit (0) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nnnnnn yards",
      "start": "3430",
      "end": "3435",
      "title": "LENGTH (yd), log",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "00",
        "01"
      ],
      "excludes": [
        {
          "start": "3430",
          "end": "3435"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3431",
      "formatString": "N4+N6",
      "description": "Length or first dimension, yards",
      "regex": "(\\d{6})",
      "note": "The fourth digit (1) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nnnnn.n yards",
      "start": "3430",
      "end": "3435",
      "title": "LENGTH (yd), log",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "00",
        "01"
      ],
      "excludes": [
        {
          "start": "3430",
          "end": "3435"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3432",
      "formatString": "N4+N6",
      "description": "Length or first dimension, yards",
      "regex": "(\\d{6})",
      "note": "The fourth digit (2) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nnnn.nn yards",
      "start": "3430",
      "end": "3435",
      "title": "LENGTH (yd), log",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "00",
        "01"
      ],
      "excludes": [
        {
          "start": "3430",
          "end": "3435"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3433",
      "formatString": "N4+N6",
      "description": "Length or first dimension, yards",
      "regex": "(\\d{6})",
      "note": "The fourth digit (3) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nnn.nnn yards",
      "start": "3430",
      "end": "3435",
      "title": "LENGTH (yd), log",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "00",
        "01"
      ],
      "excludes": [
        {
          "start": "3430",
          "end": "3435"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3434",
      "formatString": "N4+N6",
      "description": "Length or first dimension, yards",
      "regex": "(\\d{6})",
      "note": "The fourth digit (4) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nn.nnnn yards",
      "start": "3430",
      "end": "3435",
      "title": "LENGTH (yd), log",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "00",
        "01"
      ],
      "excludes": [
        {
          "start": "3430",
          "end": "3435"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3435",
      "formatString": "N4+N6",
      "description": "Length or first dimension, yards",
      "regex": "(\\d{6})",
      "note": "The fourth digit (5) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = n.nnnnn yards",
      "start": "3430",
      "end": "3435",
      "title": "LENGTH (yd), log",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "00",
        "01"
      ],
      "excludes": [
        {
          "start": "3430",
          "end": "3435"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3440",
      "formatString": "N4+N6",
      "description": "Width, diameter, or second dimension, inches",
      "regex": "(\\d{6})",
      "note": "The fourth digit (0) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nnnnnn inches",
      "start": "3440",
      "end": "3445",
      "title": "WIDTH (in), log",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "00",
        "01"
      ],
      "excludes": [
        {
          "start": "3440",
          "end": "3445"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3441",
      "formatString": "N4+N6",
      "description": "Width, diameter, or second dimension, inches",
      "regex": "(\\d{6})",
      "note": "The fourth digit (1) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nnnnn.n inches",
      "start": "3440",
      "end": "3445",
      "title": "WIDTH (in), log",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "00",
        "01"
      ],
      "excludes": [
        {
          "start": "3440",
          "end": "3445"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3442",
      "formatString": "N4+N6",
      "description": "Width, diameter, or second dimension, inches",
      "regex": "(\\d{6})",
      "note": "The fourth digit (2) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nnnn.nn inches",
      "start": "3440",
      "end": "3445",
      "title": "WIDTH (in), log",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "00",
        "01"
      ],
      "excludes": [
        {
          "start": "3440",
          "end": "3445"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3443",
      "formatString": "N4+N6",
      "description": "Width, diameter, or second dimension, inches",
      "regex": "(\\d{6})",
      "note": "The fourth digit (3) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nnn.nnn inches",
      "start": "3440",
      "end": "3445",
      "title": "WIDTH (in), log",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "00",
        "01"
      ],
      "excludes": [
        {
          "start": "3440",
          "end": "3445"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3444",
      "formatString": "N4+N6",
      "description": "Width, diameter, or second dimension, inches",
      "regex": "(\\d{6})",
      "note": "The fourth digit (4) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nn.nnnn inches",
      "start": "3440",
      "end": "3445",
      "title": "WIDTH (in), log",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "00",
        "01"
      ],
      "excludes": [
        {
          "start": "3440",
          "end": "3445"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3445",
      "formatString": "N4+N6",
      "description": "Width, diameter, or second dimension, inches",
      "regex": "(\\d{6})",
      "note": "The fourth digit (5) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = n.nnnnn inches",
      "start": "3440",
      "end": "3445",
      "title": "WIDTH (in), log",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "00",
        "01"
      ],
      "excludes": [
        {
          "start": "3440",
          "end": "3445"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3450",
      "formatString": "N4+N6",
      "description": "Width, diameter, or second dimension, feet",
      "regex": "(\\d{6})",
      "note": "The fourth digit (0) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nnnnnn feet",
      "start": "3450",
      "end": "3455",
      "title": "WIDTH (ft), log",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "00",
        "01"
      ],
      "excludes": [
        {
          "start": "3450",
          "end": "3455"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3451",
      "formatString": "N4+N6",
      "description": "Width, diameter, or second dimension, feet",
      "regex": "(\\d{6})",
      "note": "The fourth digit (1) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nnnnn.n feet",
      "start": "3450",
      "end": "3455",
      "title": "WIDTH (ft), log",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "00",
        "01"
      ],
      "excludes": [
        {
          "start": "3450",
          "end": "3455"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3452",
      "formatString": "N4+N6",
      "description": "Width, diameter, or second dimension, feet",
      "regex": "(\\d{6})",
      "note": "The fourth digit (2) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nnnn.nn feet",
      "start": "3450",
      "end": "3455",
      "title": "WIDTH (ft), log",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "00",
        "01"
      ],
      "excludes": [
        {
          "start": "3450",
          "end": "3455"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3453",
      "formatString": "N4+N6",
      "description": "Width, diameter, or second dimension, feet",
      "regex": "(\\d{6})",
      "note": "The fourth digit (3) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nnn.nnn feet",
      "start": "3450",
      "end": "3455",
      "title": "WIDTH (ft), log",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "00",
        "01"
      ],
      "excludes": [
        {
          "start": "3450",
          "end": "3455"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3454",
      "formatString": "N4+N6",
      "description": "Width, diameter, or second dimension, feet",
      "regex": "(\\d{6})",
      "note": "The fourth digit (4) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nn.nnnn feet",
      "start": "3450",
      "end": "3455",
      "title": "WIDTH (ft), log",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "00",
        "01"
      ],
      "excludes": [
        {
          "start": "3450",
          "end": "3455"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3455",
      "formatString": "N4+N6",
      "description": "Width, diameter, or second dimension, feet",
      "regex": "(\\d{6})",
      "note": "The fourth digit (5) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = n.nnnnn feet",
      "start": "3450",
      "end": "3455",
      "title": "WIDTH (ft), log",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "00",
        "01"
      ],
      "excludes": [
        {
          "start": "3450",
          "end": "3455"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3460",
      "formatString": "N4+N6",
      "description": "Width, diameter, or second dimension, yard",
      "regex": "(\\d{6})",
      "note": "The fourth digit (0) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nnnnnn yards",
      "start": "3460",
      "end": "3465",
      "title": "WIDTH (yd), log",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "00",
        "01"
      ],
      "excludes": [
        {
          "start": "3460",
          "end": "3465"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3461",
      "formatString": "N4+N6",
      "description": "Width, diameter, or second dimension, yard",
      "regex": "(\\d{6})",
      "note": "The fourth digit (1) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nnnnn.n yards",
      "start": "3460",
      "end": "3465",
      "title": "WIDTH (yd), log",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "00",
        "01"
      ],
      "excludes": [
        {
          "start": "3460",
          "end": "3465"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3462",
      "formatString": "N4+N6",
      "description": "Width, diameter, or second dimension, yard",
      "regex": "(\\d{6})",
      "note": "The fourth digit (2) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nnnn.nn yards",
      "start": "3460",
      "end": "3465",
      "title": "WIDTH (yd), log",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "00",
        "01"
      ],
      "excludes": [
        {
          "start": "3460",
          "end": "3465"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3463",
      "formatString": "N4+N6",
      "description": "Width, diameter, or second dimension, yard",
      "regex": "(\\d{6})",
      "note": "The fourth digit (3) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nnn.nnn yards",
      "start": "3460",
      "end": "3465",
      "title": "WIDTH (yd), log",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "00",
        "01"
      ],
      "excludes": [
        {
          "start": "3460",
          "end": "3465"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3464",
      "formatString": "N4+N6",
      "description": "Width, diameter, or second dimension, yard",
      "regex": "(\\d{6})",
      "note": "The fourth digit (4) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nn.nnnn yards",
      "start": "3460",
      "end": "3465",
      "title": "WIDTH (yd), log",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "00",
        "01"
      ],
      "excludes": [
        {
          "start": "3460",
          "end": "3465"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3465",
      "formatString": "N4+N6",
      "description": "Width, diameter, or second dimension, yard",
      "regex": "(\\d{6})",
      "note": "The fourth digit (5) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = n.nnnnn yards",
      "start": "3460",
      "end": "3465",
      "title": "WIDTH (yd), log",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "00",
        "01"
      ],
      "excludes": [
        {
          "start": "3460",
          "end": "3465"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3470",
      "formatString": "N4+N6",
      "description": "Depth, thickness, height, or third dimension, inches",
      "regex": "(\\d{6})",
      "note": "The fourth digit (0) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nnnnnn inches",
      "start": "3470",
      "end": "3475",
      "title": "HEIGHT (in), log",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "00",
        "01"
      ],
      "excludes": [
        {
          "start": "3470",
          "end": "3475"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3471",
      "formatString": "N4+N6",
      "description": "Depth, thickness, height, or third dimension, inches",
      "regex": "(\\d{6})",
      "note": "The fourth digit (1) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nnnnn.n inches",
      "start": "3470",
      "end": "3475",
      "title": "HEIGHT (in), log",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "00",
        "01"
      ],
      "excludes": [
        {
          "start": "3470",
          "end": "3475"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3472",
      "formatString": "N4+N6",
      "description": "Depth, thickness, height, or third dimension, inches",
      "regex": "(\\d{6})",
      "note": "The fourth digit (2) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nnnn.nn inches",
      "start": "3470",
      "end": "3475",
      "title": "HEIGHT (in), log",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "00",
        "01"
      ],
      "excludes": [
        {
          "start": "3470",
          "end": "3475"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3473",
      "formatString": "N4+N6",
      "description": "Depth, thickness, height, or third dimension, inches",
      "regex": "(\\d{6})",
      "note": "The fourth digit (3) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nnn.nnn inches",
      "start": "3470",
      "end": "3475",
      "title": "HEIGHT (in), log",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "00",
        "01"
      ],
      "excludes": [
        {
          "start": "3470",
          "end": "3475"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3474",
      "formatString": "N4+N6",
      "description": "Depth, thickness, height, or third dimension, inches",
      "regex": "(\\d{6})",
      "note": "The fourth digit (4) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nn.nnnn inches",
      "start": "3470",
      "end": "3475",
      "title": "HEIGHT (in), log",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "00",
        "01"
      ],
      "excludes": [
        {
          "start": "3470",
          "end": "3475"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3475",
      "formatString": "N4+N6",
      "description": "Depth, thickness, height, or third dimension, inches",
      "regex": "(\\d{6})",
      "note": "The fourth digit (5) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = n.nnnnn inches",
      "start": "3470",
      "end": "3475",
      "title": "HEIGHT (in), log",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "00",
        "01"
      ],
      "excludes": [
        {
          "start": "3470",
          "end": "3475"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3480",
      "formatString": "N4+N6",
      "description": "Depth, thickness, height, or third dimension, feet",
      "regex": "(\\d{6})",
      "note": "The fourth digit (0) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nnnnnn feet",
      "start": "3480",
      "end": "3485",
      "title": "HEIGHT (ft), log",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "00",
        "01"
      ],
      "excludes": [
        {
          "start": "3480",
          "end": "3485"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3481",
      "formatString": "N4+N6",
      "description": "Depth, thickness, height, or third dimension, feet",
      "regex": "(\\d{6})",
      "note": "The fourth digit (1) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nnnnn.n feet",
      "start": "3480",
      "end": "3485",
      "title": "HEIGHT (ft), log",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "00",
        "01"
      ],
      "excludes": [
        {
          "start": "3480",
          "end": "3485"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3482",
      "formatString": "N4+N6",
      "description": "Depth, thickness, height, or third dimension, feet",
      "regex": "(\\d{6})",
      "note": "The fourth digit (2) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nnnn.nn feet",
      "start": "3480",
      "end": "3485",
      "title": "HEIGHT (ft), log",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "00",
        "01"
      ],
      "excludes": [
        {
          "start": "3480",
          "end": "3485"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3483",
      "formatString": "N4+N6",
      "description": "Depth, thickness, height, or third dimension, feet",
      "regex": "(\\d{6})",
      "note": "The fourth digit (3) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nnn.nnn feet",
      "start": "3480",
      "end": "3485",
      "title": "HEIGHT (ft), log",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "00",
        "01"
      ],
      "excludes": [
        {
          "start": "3480",
          "end": "3485"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3484",
      "formatString": "N4+N6",
      "description": "Depth, thickness, height, or third dimension, feet",
      "regex": "(\\d{6})",
      "note": "The fourth digit (4) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nn.nnnn feet",
      "start": "3480",
      "end": "3485",
      "title": "HEIGHT (ft), log",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "00",
        "01"
      ],
      "excludes": [
        {
          "start": "3480",
          "end": "3485"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3485",
      "formatString": "N4+N6",
      "description": "Depth, thickness, height, or third dimension, feet",
      "regex": "(\\d{6})",
      "note": "The fourth digit (5) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = n.nnnnn feet",
      "start": "3480",
      "end": "3485",
      "title": "HEIGHT (ft), log",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "00",
        "01"
      ],
      "excludes": [
        {
          "start": "3480",
          "end": "3485"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3490",
      "formatString": "N4+N6",
      "description": "Depth, thickness, height, or third dimension, yards",
      "regex": "(\\d{6})",
      "note": "The fourth digit (0) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nnnnnn yards",
      "start": "3490",
      "end": "3495",
      "title": "HEIGHT (yd), log",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "00",
        "01"
      ],
      "excludes": [
        {
          "start": "3490",
          "end": "3495"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3491",
      "formatString": "N4+N6",
      "description": "Depth, thickness, height, or third dimension, yards",
      "regex": "(\\d{6})",
      "note": "The fourth digit (1) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nnnnn.n yards",
      "start": "3490",
      "end": "3495",
      "title": "HEIGHT (yd), log",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "00",
        "01"
      ],
      "excludes": [
        {
          "start": "3490",
          "end": "3495"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3492",
      "formatString": "N4+N6",
      "description": "Depth, thickness, height, or third dimension, yards",
      "regex": "(\\d{6})",
      "note": "The fourth digit (2) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nnnn.nn yards",
      "start": "3490",
      "end": "3495",
      "title": "HEIGHT (yd), log",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "00",
        "01"
      ],
      "excludes": [
        {
          "start": "3490",
          "end": "3495"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3493",
      "formatString": "N4+N6",
      "description": "Depth, thickness, height, or third dimension, yards",
      "regex": "(\\d{6})",
      "note": "The fourth digit (3) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nnn.nnn yards",
      "start": "3490",
      "end": "3495",
      "title": "HEIGHT (yd), log",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "00",
        "01"
      ],
      "excludes": [
        {
          "start": "3490",
          "end": "3495"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3494",
      "formatString": "N4+N6",
      "description": "Depth, thickness, height, or third dimension, yards",
      "regex": "(\\d{6})",
      "note": "The fourth digit (4) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nn.nnnn yards",
      "start": "3490",
      "end": "3495",
      "title": "HEIGHT (yd), log",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "00",
        "01"
      ],
      "excludes": [
        {
          "start": "3490",
          "end": "3495"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3495",
      "formatString": "N4+N6",
      "description": "Depth, thickness, height, or third dimension, yards",
      "regex": "(\\d{6})",
      "note": "The fourth digit (5) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = n.nnnnn yards",
      "start": "3490",
      "end": "3495",
      "title": "HEIGHT (yd), log",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "00",
        "01"
      ],
      "excludes": [
        {
          "start": "3490",
          "end": "3495"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3500",
      "formatString": "N4+N6",
      "description": "Area, square inches (variable measure trade item)",
      "regex": "(\\d{6})",
      "note": "The fourth digit (0) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nnnnnn square inches",
      "start": "3500",
      "end": "3505",
      "title": "AREA (in²)",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "01",
        "02"
      ],
      "excludes": [
        {
          "start": "3500",
          "end": "3505"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3501",
      "formatString": "N4+N6",
      "description": "Area, square inches (variable measure trade item)",
      "regex": "(\\d{6})",
      "note": "The fourth digit (1) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nnnnn.n square inches",
      "start": "3500",
      "end": "3505",
      "title": "AREA (in²)",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "01",
        "02"
      ],
      "excludes": [
        {
          "start": "3500",
          "end": "3505"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3502",
      "formatString": "N4+N6",
      "description": "Area, square inches (variable measure trade item)",
      "regex": "(\\d{6})",
      "note": "The fourth digit (2) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nnnn.nn square inches",
      "start": "3500",
      "end": "3505",
      "title": "AREA (in²)",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "01",
        "02"
      ],
      "excludes": [
        {
          "start": "3500",
          "end": "3505"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3503",
      "formatString": "N4+N6",
      "description": "Area, square inches (variable measure trade item)",
      "regex": "(\\d{6})",
      "note": "The fourth digit (3) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nnn.nnn square inches",
      "start": "3500",
      "end": "3505",
      "title": "AREA (in²)",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "01",
        "02"
      ],
      "excludes": [
        {
          "start": "3500",
          "end": "3505"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3504",
      "formatString": "N4+N6",
      "description": "Area, square inches (variable measure trade item)",
      "regex": "(\\d{6})",
      "note": "The fourth digit (4) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nn.nnnn square inches",
      "start": "3500",
      "end": "3505",
      "title": "AREA (in²)",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "01",
        "02"
      ],
      "excludes": [
        {
          "start": "3500",
          "end": "3505"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3505",
      "formatString": "N4+N6",
      "description": "Area, square inches (variable measure trade item)",
      "regex": "(\\d{6})",
      "note": "The fourth digit (5) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = n.nnnnn square inches",
      "start": "3500",
      "end": "3505",
      "title": "AREA (in²)",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "01",
        "02"
      ],
      "excludes": [
        {
          "start": "3500",
          "end": "3505"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3510",
      "formatString": "N4+N6",
      "description": "Area, square feet (variable measure trade item)",
      "regex": "(\\d{6})",
      "note": "The fourth digit (0) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nnnnnn square feet",
      "start": "3510",
      "end": "3515",
      "title": "AREA (ft²)",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "01",
        "02"
      ],
      "excludes": [
        {
          "start": "3510",
          "end": "3515"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3511",
      "formatString": "N4+N6",
      "description": "Area, square feet (variable measure trade item)",
      "regex": "(\\d{6})",
      "note": "The fourth digit (1) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nnnnn.n square feet",
      "start": "3510",
      "end": "3515",
      "title": "AREA (ft²)",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "01",
        "02"
      ],
      "excludes": [
        {
          "start": "3510",
          "end": "3515"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3512",
      "formatString": "N4+N6",
      "description": "Area, square feet (variable measure trade item)",
      "regex": "(\\d{6})",
      "note": "The fourth digit (2) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nnnn.nn square feet",
      "start": "3510",
      "end": "3515",
      "title": "AREA (ft²)",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "01",
        "02"
      ],
      "excludes": [
        {
          "start": "3510",
          "end": "3515"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3513",
      "formatString": "N4+N6",
      "description": "Area, square feet (variable measure trade item)",
      "regex": "(\\d{6})",
      "note": "The fourth digit (3) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nnn.nnn square feet",
      "start": "3510",
      "end": "3515",
      "title": "AREA (ft²)",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "01",
        "02"
      ],
      "excludes": [
        {
          "start": "3510",
          "end": "3515"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3514",
      "formatString": "N4+N6",
      "description": "Area, square feet (variable measure trade item)",
      "regex": "(\\d{6})",
      "note": "The fourth digit (4) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nn.nnnn square feet",
      "start": "3510",
      "end": "3515",
      "title": "AREA (ft²)",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "01",
        "02"
      ],
      "excludes": [
        {
          "start": "3510",
          "end": "3515"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3515",
      "formatString": "N4+N6",
      "description": "Area, square feet (variable measure trade item)",
      "regex": "(\\d{6})",
      "note": "The fourth digit (5) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = n.nnnnn square feet",
      "start": "3510",
      "end": "3515",
      "title": "AREA (ft²)",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "01",
        "02"
      ],
      "excludes": [
        {
          "start": "3510",
          "end": "3515"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3520",
      "formatString": "N4+N6",
      "description": "Area, square yards (variable measure trade item)",
      "regex": "(\\d{6})",
      "note": "The fourth digit (0) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nnnnnn square yards",
      "start": "3520",
      "end": "3525",
      "title": "AREA (yd²)",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "01",
        "02"
      ],
      "excludes": [
        {
          "start": "3520",
          "end": "3525"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3521",
      "formatString": "N4+N6",
      "description": "Area, square yards (variable measure trade item)",
      "regex": "(\\d{6})",
      "note": "The fourth digit (1) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nnnnn.n square yards",
      "start": "3520",
      "end": "3525",
      "title": "AREA (yd²)",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "01",
        "02"
      ],
      "excludes": [
        {
          "start": "3520",
          "end": "3525"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3522",
      "formatString": "N4+N6",
      "description": "Area, square yards (variable measure trade item)",
      "regex": "(\\d{6})",
      "note": "The fourth digit (2) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nnnn.nn square yards",
      "start": "3520",
      "end": "3525",
      "title": "AREA (yd²)",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "01",
        "02"
      ],
      "excludes": [
        {
          "start": "3520",
          "end": "3525"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3523",
      "formatString": "N4+N6",
      "description": "Area, square yards (variable measure trade item)",
      "regex": "(\\d{6})",
      "note": "The fourth digit (3) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nnn.nnn square yards",
      "start": "3520",
      "end": "3525",
      "title": "AREA (yd²)",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "01",
        "02"
      ],
      "excludes": [
        {
          "start": "3520",
          "end": "3525"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3524",
      "formatString": "N4+N6",
      "description": "Area, square yards (variable measure trade item)",
      "regex": "(\\d{6})",
      "note": "The fourth digit (4) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nn.nnnn square yards",
      "start": "3520",
      "end": "3525",
      "title": "AREA (yd²)",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "01",
        "02"
      ],
      "excludes": [
        {
          "start": "3520",
          "end": "3525"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3525",
      "formatString": "N4+N6",
      "description": "Area, square yards (variable measure trade item)",
      "regex": "(\\d{6})",
      "note": "The fourth digit (5) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = n.nnnnn square yards",
      "start": "3520",
      "end": "3525",
      "title": "AREA (yd²)",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "01",
        "02"
      ],
      "excludes": [
        {
          "start": "3520",
          "end": "3525"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3530",
      "formatString": "N4+N6",
      "description": "Area, square inches",
      "regex": "(\\d{6})",
      "note": "The fourth digit (0) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nnnnnn square inches",
      "start": "3530",
      "end": "3535",
      "title": "AREA (in²), log",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "00",
        "01"
      ],
      "excludes": [
        {
          "start": "3530",
          "end": "3535"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3531",
      "formatString": "N4+N6",
      "description": "Area, square inches",
      "regex": "(\\d{6})",
      "note": "The fourth digit (1) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nnnnn.n square inches",
      "start": "3530",
      "end": "3535",
      "title": "AREA (in²), log",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "00",
        "01"
      ],
      "excludes": [
        {
          "start": "3530",
          "end": "3535"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3532",
      "formatString": "N4+N6",
      "description": "Area, square inches",
      "regex": "(\\d{6})",
      "note": "The fourth digit (2) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nnnn.nn square inches",
      "start": "3530",
      "end": "3535",
      "title": "AREA (in²), log",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "00",
        "01"
      ],
      "excludes": [
        {
          "start": "3530",
          "end": "3535"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3533",
      "formatString": "N4+N6",
      "description": "Area, square inches",
      "regex": "(\\d{6})",
      "note": "The fourth digit (3) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nnn.nnn square inches",
      "start": "3530",
      "end": "3535",
      "title": "AREA (in²), log",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "00",
        "01"
      ],
      "excludes": [
        {
          "start": "3530",
          "end": "3535"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3534",
      "formatString": "N4+N6",
      "description": "Area, square inches",
      "regex": "(\\d{6})",
      "note": "The fourth digit (4) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nn.nnnn square inches",
      "start": "3530",
      "end": "3535",
      "title": "AREA (in²), log",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "00",
        "01"
      ],
      "excludes": [
        {
          "start": "3530",
          "end": "3535"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3535",
      "formatString": "N4+N6",
      "description": "Area, square inches",
      "regex": "(\\d{6})",
      "note": "The fourth digit (5) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = n.nnnnn square inches",
      "start": "3530",
      "end": "3535",
      "title": "AREA (in²), log",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "00",
        "01"
      ],
      "excludes": [
        {
          "start": "3530",
          "end": "3535"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3540",
      "formatString": "N4+N6",
      "description": "Area, square feet",
      "regex": "(\\d{6})",
      "note": "The fourth digit (0) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nnnnnn square feet",
      "start": "3540",
      "end": "3545",
      "title": "AREA (ft²), log",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "00",
        "01"
      ],
      "excludes": [
        {
          "start": "3540",
          "end": "3545"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3541",
      "formatString": "N4+N6",
      "description": "Area, square feet",
      "regex": "(\\d{6})",
      "note": "The fourth digit (1) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nnnnn.n square feet",
      "start": "3540",
      "end": "3545",
      "title": "AREA (ft²), log",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "00",
        "01"
      ],
      "excludes": [
        {
          "start": "3540",
          "end": "3545"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3542",
      "formatString": "N4+N6",
      "description": "Area, square feet",
      "regex": "(\\d{6})",
      "note": "The fourth digit (2) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nnnn.nn square feet",
      "start": "3540",
      "end": "3545",
      "title": "AREA (ft²), log",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "00",
        "01"
      ],
      "excludes": [
        {
          "start": "3540",
          "end": "3545"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3543",
      "formatString": "N4+N6",
      "description": "Area, square feet",
      "regex": "(\\d{6})",
      "note": "The fourth digit (3) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nnn.nnn square feet",
      "start": "3540",
      "end": "3545",
      "title": "AREA (ft²), log",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "00",
        "01"
      ],
      "excludes": [
        {
          "start": "3540",
          "end": "3545"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3544",
      "formatString": "N4+N6",
      "description": "Area, square feet",
      "regex": "(\\d{6})",
      "note": "The fourth digit (4) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nn.nnnn square feet",
      "start": "3540",
      "end": "3545",
      "title": "AREA (ft²), log",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "00",
        "01"
      ],
      "excludes": [
        {
          "start": "3540",
          "end": "3545"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3545",
      "formatString": "N4+N6",
      "description": "Area, square feet",
      "regex": "(\\d{6})",
      "note": "The fourth digit (5) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = n.nnnnn square feet",
      "start": "3540",
      "end": "3545",
      "title": "AREA (ft²), log",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "00",
        "01"
      ],
      "excludes": [
        {
          "start": "3540",
          "end": "3545"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3550",
      "formatString": "N4+N6",
      "description": "Area, square yards",
      "regex": "(\\d{6})",
      "note": "The fourth digit (0) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nnnnnn square yards",
      "start": "3550",
      "end": "3555",
      "title": "AREA (yd²), log",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "00",
        "01"
      ],
      "excludes": [
        {
          "start": "3550",
          "end": "3555"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3551",
      "formatString": "N4+N6",
      "description": "Area, square yards",
      "regex": "(\\d{6})",
      "note": "The fourth digit (1) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nnnnn.n square yards",
      "start": "3550",
      "end": "3555",
      "title": "AREA (yd²), log",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "00",
        "01"
      ],
      "excludes": [
        {
          "start": "3550",
          "end": "3555"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3552",
      "formatString": "N4+N6",
      "description": "Area, square yards",
      "regex": "(\\d{6})",
      "note": "The fourth digit (2) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nnnn.nn square yards",
      "start": "3550",
      "end": "3555",
      "title": "AREA (yd²), log",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "00",
        "01"
      ],
      "excludes": [
        {
          "start": "3550",
          "end": "3555"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3553",
      "formatString": "N4+N6",
      "description": "Area, square yards",
      "regex": "(\\d{6})",
      "note": "The fourth digit (3) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nnn.nnn square yards",
      "start": "3550",
      "end": "3555",
      "title": "AREA (yd²), log",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "00",
        "01"
      ],
      "excludes": [
        {
          "start": "3550",
          "end": "3555"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3554",
      "formatString": "N4+N6",
      "description": "Area, square yards",
      "regex": "(\\d{6})",
      "note": "The fourth digit (4) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nn.nnnn square yards",
      "start": "3550",
      "end": "3555",
      "title": "AREA (yd²), log",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "00",
        "01"
      ],
      "excludes": [
        {
          "start": "3550",
          "end": "3555"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3555",
      "formatString": "N4+N6",
      "description": "Area, square yards",
      "regex": "(\\d{6})",
      "note": "The fourth digit (5) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = n.nnnnn square yards",
      "start": "3550",
      "end": "3555",
      "title": "AREA (yd²), log",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "00",
        "01"
      ],
      "excludes": [
        {
          "start": "3550",
          "end": "3555"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3560",
      "formatString": "N4+N6",
      "description": "Net weight, troy ounces (variable measure trade item)",
      "regex": "(\\d{6})",
      "note": "The fourth digit (0) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nnnnnn troy ounces",
      "start": "3560",
      "end": "3565",
      "title": "NET WEIGHT (troy oz)",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "01",
        "02"
      ],
      "excludes": [
        {
          "start": "3560",
          "end": "3565"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3561",
      "formatString": "N4+N6",
      "description": "Net weight, troy ounces (variable measure trade item)",
      "regex": "(\\d{6})",
      "note": "The fourth digit (1) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nnnnn.n troy ounces",
      "start": "3560",
      "end": "3565",
      "title": "NET WEIGHT (troy oz)",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "01",
        "02"
      ],
      "excludes": [
        {
          "start": "3560",
          "end": "3565"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3562",
      "formatString": "N4+N6",
      "description": "Net weight, troy ounces (variable measure trade item)",
      "regex": "(\\d{6})",
      "note": "The fourth digit (2) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nnnn.nn troy ounces",
      "start": "3560",
      "end": "3565",
      "title": "NET WEIGHT (troy oz)",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "01",
        "02"
      ],
      "excludes": [
        {
          "start": "3560",
          "end": "3565"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3563",
      "formatString": "N4+N6",
      "description": "Net weight, troy ounces (variable measure trade item)",
      "regex": "(\\d{6})",
      "note": "The fourth digit (3) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nnn.nnn troy ounces",
      "start": "3560",
      "end": "3565",
      "title": "NET WEIGHT (troy oz)",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "01",
        "02"
      ],
      "excludes": [
        {
          "start": "3560",
          "end": "3565"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3564",
      "formatString": "N4+N6",
      "description": "Net weight, troy ounces (variable measure trade item)",
      "regex": "(\\d{6})",
      "note": "The fourth digit (4) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nn.nnnn troy ounces",
      "start": "3560",
      "end": "3565",
      "title": "NET WEIGHT (troy oz)",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "01",
        "02"
      ],
      "excludes": [
        {
          "start": "3560",
          "end": "3565"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3565",
      "formatString": "N4+N6",
      "description": "Net weight, troy ounces (variable measure trade item)",
      "regex": "(\\d{6})",
      "note": "The fourth digit (5) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = n.nnnnn troy ounces",
      "start": "3560",
      "end": "3565",
      "title": "NET WEIGHT (troy oz)",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "01",
        "02"
      ],
      "excludes": [
        {
          "start": "3560",
          "end": "3565"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3570",
      "formatString": "N4+N6",
      "description": "Net weight (or volume), ounces (variable measure trade item)",
      "regex": "(\\d{6})",
      "note": "The fourth digit (0) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nnnnnn ounces",
      "start": "3570",
      "end": "3575",
      "title": "NET VOLUME (oz)",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "01",
        "02"
      ],
      "excludes": [
        {
          "start": "3570",
          "end": "3575"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3571",
      "formatString": "N4+N6",
      "description": "Net weight (or volume), ounces (variable measure trade item)",
      "regex": "(\\d{6})",
      "note": "The fourth digit (1) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nnnnn.n ounces",
      "start": "3570",
      "end": "3575",
      "title": "NET VOLUME (oz)",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "01",
        "02"
      ],
      "excludes": [
        {
          "start": "3570",
          "end": "3575"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3572",
      "formatString": "N4+N6",
      "description": "Net weight (or volume), ounces (variable measure trade item)",
      "regex": "(\\d{6})",
      "note": "The fourth digit (2) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nnnn.nn ounces",
      "start": "3570",
      "end": "3575",
      "title": "NET VOLUME (oz)",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "01",
        "02"
      ],
      "excludes": [
        {
          "start": "3570",
          "end": "3575"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3573",
      "formatString": "N4+N6",
      "description": "Net weight (or volume), ounces (variable measure trade item)",
      "regex": "(\\d{6})",
      "note": "The fourth digit (3) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nnn.nnn ounces",
      "start": "3570",
      "end": "3575",
      "title": "NET VOLUME (oz)",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "01",
        "02"
      ],
      "excludes": [
        {
          "start": "3570",
          "end": "3575"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3574",
      "formatString": "N4+N6",
      "description": "Net weight (or volume), ounces (variable measure trade item)",
      "regex": "(\\d{6})",
      "note": "The fourth digit (4) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nn.nnnn ounces",
      "start": "3570",
      "end": "3575",
      "title": "NET VOLUME (oz)",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "01",
        "02"
      ],
      "excludes": [
        {
          "start": "3570",
          "end": "3575"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3575",
      "formatString": "N4+N6",
      "description": "Net weight (or volume), ounces (variable measure trade item)",
      "regex": "(\\d{6})",
      "note": "The fourth digit (5) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = n.nnnnn ounces",
      "start": "3570",
      "end": "3575",
      "title": "NET VOLUME (oz)",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "01",
        "02"
      ],
      "excludes": [
        {
          "start": "3570",
          "end": "3575"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3600",
      "formatString": "N4+N6",
      "description": "Net volume, quarts (variable measure trade item)",
      "regex": "(\\d{6})",
      "note": "The fourth digit (0) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nnnnnn quarts",
      "start": "3600",
      "end": "3605",
      "title": "NET VOLUME (qt)",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "01",
        "02"
      ],
      "excludes": [
        {
          "start": "3600",
          "end": "3605"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3601",
      "formatString": "N4+N6",
      "description": "Net volume, quarts (variable measure trade item)",
      "regex": "(\\d{6})",
      "note": "The fourth digit (1) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nnnnn.n quarts",
      "start": "3600",
      "end": "3605",
      "title": "NET VOLUME (qt)",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "01",
        "02"
      ],
      "excludes": [
        {
          "start": "3600",
          "end": "3605"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3602",
      "formatString": "N4+N6",
      "description": "Net volume, quarts (variable measure trade item)",
      "regex": "(\\d{6})",
      "note": "The fourth digit (2) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nnnn.nn quarts",
      "start": "3600",
      "end": "3605",
      "title": "NET VOLUME (qt)",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "01",
        "02"
      ],
      "excludes": [
        {
          "start": "3600",
          "end": "3605"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3603",
      "formatString": "N4+N6",
      "description": "Net volume, quarts (variable measure trade item)",
      "regex": "(\\d{6})",
      "note": "The fourth digit (3) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nnn.nnn quarts",
      "start": "3600",
      "end": "3605",
      "title": "NET VOLUME (qt)",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "01",
        "02"
      ],
      "excludes": [
        {
          "start": "3600",
          "end": "3605"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3604",
      "formatString": "N4+N6",
      "description": "Net volume, quarts (variable measure trade item)",
      "regex": "(\\d{6})",
      "note": "The fourth digit (4) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nn.nnnn quarts",
      "start": "3600",
      "end": "3605",
      "title": "NET VOLUME (qt)",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "01",
        "02"
      ],
      "excludes": [
        {
          "start": "3600",
          "end": "3605"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3605",
      "formatString": "N4+N6",
      "description": "Net volume, quarts (variable measure trade item)",
      "regex": "(\\d{6})",
      "note": "The fourth digit (5) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = n.nnnnn quarts",
      "start": "3600",
      "end": "3605",
      "title": "NET VOLUME (qt)",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "01",
        "02"
      ],
      "excludes": [
        {
          "start": "3600",
          "end": "3605"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3610",
      "formatString": "N4+N6",
      "description": "Net volume, gallons U.S. (variable measure trade item)",
      "regex": "(\\d{6})",
      "note": "The fourth digit (0) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nnnnnn US gallons",
      "start": "3610",
      "end": "3615",
      "title": "NET VOLUME (gal.)",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "01",
        "02"
      ],
      "excludes": [
        {
          "start": "3610",
          "end": "3615"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3611",
      "formatString": "N4+N6",
      "description": "Net volume, gallons U.S. (variable measure trade item)",
      "regex": "(\\d{6})",
      "note": "The fourth digit (1) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nnnnn.n US gallons",
      "start": "3610",
      "end": "3615",
      "title": "NET VOLUME (gal.)",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "01",
        "02"
      ],
      "excludes": [
        {
          "start": "3610",
          "end": "3615"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3612",
      "formatString": "N4+N6",
      "description": "Net volume, gallons U.S. (variable measure trade item)",
      "regex": "(\\d{6})",
      "note": "The fourth digit (2) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nnnn.nn US gallons",
      "start": "3610",
      "end": "3615",
      "title": "NET VOLUME (gal.)",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "01",
        "02"
      ],
      "excludes": [
        {
          "start": "3610",
          "end": "3615"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3613",
      "formatString": "N4+N6",
      "description": "Net volume, gallons U.S. (variable measure trade item)",
      "regex": "(\\d{6})",
      "note": "The fourth digit (3) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nnn.nnn US gallons",
      "start": "3610",
      "end": "3615",
      "title": "NET VOLUME (gal.)",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "01",
        "02"
      ],
      "excludes": [
        {
          "start": "3610",
          "end": "3615"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3614",
      "formatString": "N4+N6",
      "description": "Net volume, gallons U.S. (variable measure trade item)",
      "regex": "(\\d{6})",
      "note": "The fourth digit (4) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nn.nnnn US gallons",
      "start": "3610",
      "end": "3615",
      "title": "NET VOLUME (gal.)",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "01",
        "02"
      ],
      "excludes": [
        {
          "start": "3610",
          "end": "3615"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3615",
      "formatString": "N4+N6",
      "description": "Net volume, gallons U.S. (variable measure trade item)",
      "regex": "(\\d{6})",
      "note": "The fourth digit (5) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = n.nnnnn US gallons",
      "start": "3610",
      "end": "3615",
      "title": "NET VOLUME (gal.)",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "01",
        "02"
      ],
      "excludes": [
        {
          "start": "3610",
          "end": "3615"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3620",
      "formatString": "N4+N6",
      "description": "Logistic volume, quarts",
      "regex": "(\\d{6})",
      "note": "The fourth digit (0) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nnnnnn quarts",
      "start": "3620",
      "end": "3625",
      "title": "VOLUME (qt), log",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "00",
        "01"
      ],
      "excludes": [
        {
          "start": "3620",
          "end": "3625"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3621",
      "formatString": "N4+N6",
      "description": "Logistic volume, quarts",
      "regex": "(\\d{6})",
      "note": "The fourth digit (1) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nnnnn.n quarts",
      "start": "3620",
      "end": "3625",
      "title": "VOLUME (qt), log",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "00",
        "01"
      ],
      "excludes": [
        {
          "start": "3620",
          "end": "3625"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3622",
      "formatString": "N4+N6",
      "description": "Logistic volume, quarts",
      "regex": "(\\d{6})",
      "note": "The fourth digit (2) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nnnn.nn quarts",
      "start": "3620",
      "end": "3625",
      "title": "VOLUME (qt), log",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "00",
        "01"
      ],
      "excludes": [
        {
          "start": "3620",
          "end": "3625"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3623",
      "formatString": "N4+N6",
      "description": "Logistic volume, quarts",
      "regex": "(\\d{6})",
      "note": "The fourth digit (3) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nnn.nnn quarts",
      "start": "3620",
      "end": "3625",
      "title": "VOLUME (qt), log",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "00",
        "01"
      ],
      "excludes": [
        {
          "start": "3620",
          "end": "3625"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3624",
      "formatString": "N4+N6",
      "description": "Logistic volume, quarts",
      "regex": "(\\d{6})",
      "note": "The fourth digit (4) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nn.nnnn quarts",
      "start": "3620",
      "end": "3625",
      "title": "VOLUME (qt), log",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "00",
        "01"
      ],
      "excludes": [
        {
          "start": "3620",
          "end": "3625"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3625",
      "formatString": "N4+N6",
      "description": "Logistic volume, quarts",
      "regex": "(\\d{6})",
      "note": "The fourth digit (5) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = n.nnnnn quarts",
      "start": "3620",
      "end": "3625",
      "title": "VOLUME (qt), log",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "00",
        "01"
      ],
      "excludes": [
        {
          "start": "3620",
          "end": "3625"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3630",
      "formatString": "N4+N6",
      "description": "Logistic volume, gallons U.S.",
      "regex": "(\\d{6})",
      "note": "The fourth digit (0) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nnnnnn US gallons",
      "start": "3630",
      "end": "3635",
      "title": "VOLUME (gal.), log",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "00",
        "01"
      ],
      "excludes": [
        {
          "start": "3630",
          "end": "3635"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3631",
      "formatString": "N4+N6",
      "description": "Logistic volume, gallons U.S.",
      "regex": "(\\d{6})",
      "note": "The fourth digit (1) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nnnnn.n US gallons",
      "start": "3630",
      "end": "3635",
      "title": "VOLUME (gal.), log",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "00",
        "01"
      ],
      "excludes": [
        {
          "start": "3630",
          "end": "3635"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3632",
      "formatString": "N4+N6",
      "description": "Logistic volume, gallons U.S.",
      "regex": "(\\d{6})",
      "note": "The fourth digit (2) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nnnn.nn US gallons",
      "start": "3630",
      "end": "3635",
      "title": "VOLUME (gal.), log",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "00",
        "01"
      ],
      "excludes": [
        {
          "start": "3630",
          "end": "3635"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3633",
      "formatString": "N4+N6",
      "description": "Logistic volume, gallons U.S.",
      "regex": "(\\d{6})",
      "note": "The fourth digit (3) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nnn.nnn US gallons",
      "start": "3630",
      "end": "3635",
      "title": "VOLUME (gal.), log",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "00",
        "01"
      ],
      "excludes": [
        {
          "start": "3630",
          "end": "3635"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3634",
      "formatString": "N4+N6",
      "description": "Logistic volume, gallons U.S.",
      "regex": "(\\d{6})",
      "note": "The fourth digit (4) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nn.nnnn US gallons",
      "start": "3630",
      "end": "3635",
      "title": "VOLUME (gal.), log",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "00",
        "01"
      ],
      "excludes": [
        {
          "start": "3630",
          "end": "3635"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3635",
      "formatString": "N4+N6",
      "description": "Logistic volume, gallons U.S.",
      "regex": "(\\d{6})",
      "note": "The fourth digit (5) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = n.nnnnn US gallons",
      "start": "3630",
      "end": "3635",
      "title": "VOLUME (gal.), log",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "00",
        "01"
      ],
      "excludes": [
        {
          "start": "3630",
          "end": "3635"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3640",
      "formatString": "N4+N6",
      "description": "Net volume, cubic inches (variable measure trade item)",
      "regex": "(\\d{6})",
      "note": "The fourth digit (0) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nnnnnn cubic inches",
      "start": "3640",
      "end": "3645",
      "title": "VOLUME (in³)",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "01",
        "02"
      ],
      "excludes": [
        {
          "start": "3640",
          "end": "3645"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3641",
      "formatString": "N4+N6",
      "description": "Net volume, cubic inches (variable measure trade item)",
      "regex": "(\\d{6})",
      "note": "The fourth digit (1) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nnnnn.n cubic inches",
      "start": "3640",
      "end": "3645",
      "title": "VOLUME (in³)",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "01",
        "02"
      ],
      "excludes": [
        {
          "start": "3640",
          "end": "3645"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3642",
      "formatString": "N4+N6",
      "description": "Net volume, cubic inches (variable measure trade item)",
      "regex": "(\\d{6})",
      "note": "The fourth digit (2) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nnnn.nn cubic inches",
      "start": "3640",
      "end": "3645",
      "title": "VOLUME (in³)",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "01",
        "02"
      ],
      "excludes": [
        {
          "start": "3640",
          "end": "3645"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3643",
      "formatString": "N4+N6",
      "description": "Net volume, cubic inches (variable measure trade item)",
      "regex": "(\\d{6})",
      "note": "The fourth digit (3) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nnn.nnn cubic inches",
      "start": "3640",
      "end": "3645",
      "title": "VOLUME (in³)",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "01",
        "02"
      ],
      "excludes": [
        {
          "start": "3640",
          "end": "3645"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3644",
      "formatString": "N4+N6",
      "description": "Net volume, cubic inches (variable measure trade item)",
      "regex": "(\\d{6})",
      "note": "The fourth digit (4) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nn.nnnn cubic inches",
      "start": "3640",
      "end": "3645",
      "title": "VOLUME (in³)",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "01",
        "02"
      ],
      "excludes": [
        {
          "start": "3640",
          "end": "3645"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3645",
      "formatString": "N4+N6",
      "description": "Net volume, cubic inches (variable measure trade item)",
      "regex": "(\\d{6})",
      "note": "The fourth digit (5) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = n.nnnnn cubic inches",
      "start": "3640",
      "end": "3645",
      "title": "VOLUME (in³)",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "01",
        "02"
      ],
      "excludes": [
        {
          "start": "3640",
          "end": "3645"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3650",
      "formatString": "N4+N6",
      "description": "Net volume, cubic feet (variable measure trade item)",
      "regex": "(\\d{6})",
      "note": "The fourth digit (0) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nnnnnn cubic feet",
      "start": "3650",
      "end": "3655",
      "title": "VOLUME (ft³)",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "01",
        "02"
      ],
      "excludes": [
        {
          "start": "3650",
          "end": "3655"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3651",
      "formatString": "N4+N6",
      "description": "Net volume, cubic feet (variable measure trade item)",
      "regex": "(\\d{6})",
      "note": "The fourth digit (1) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nnnnn.n cubic feet",
      "start": "3650",
      "end": "3655",
      "title": "VOLUME (ft³)",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "01",
        "02"
      ],
      "excludes": [
        {
          "start": "3650",
          "end": "3655"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3652",
      "formatString": "N4+N6",
      "description": "Net volume, cubic feet (variable measure trade item)",
      "regex": "(\\d{6})",
      "note": "The fourth digit (2) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nnnn.nn cubic feet",
      "start": "3650",
      "end": "3655",
      "title": "VOLUME (ft³)",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "01",
        "02"
      ],
      "excludes": [
        {
          "start": "3650",
          "end": "3655"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3653",
      "formatString": "N4+N6",
      "description": "Net volume, cubic feet (variable measure trade item)",
      "regex": "(\\d{6})",
      "note": "The fourth digit (3) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nnn.nnn cubic feet",
      "start": "3650",
      "end": "3655",
      "title": "VOLUME (ft³)",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "01",
        "02"
      ],
      "excludes": [
        {
          "start": "3650",
          "end": "3655"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3654",
      "formatString": "N4+N6",
      "description": "Net volume, cubic feet (variable measure trade item)",
      "regex": "(\\d{6})",
      "note": "The fourth digit (4) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nn.nnnn cubic feet",
      "start": "3650",
      "end": "3655",
      "title": "VOLUME (ft³)",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "01",
        "02"
      ],
      "excludes": [
        {
          "start": "3650",
          "end": "3655"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3655",
      "formatString": "N4+N6",
      "description": "Net volume, cubic feet (variable measure trade item)",
      "regex": "(\\d{6})",
      "note": "The fourth digit (5) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = n.nnnnn cubic feet",
      "start": "3650",
      "end": "3655",
      "title": "VOLUME (ft³)",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "01",
        "02"
      ],
      "excludes": [
        {
          "start": "3650",
          "end": "3655"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3660",
      "formatString": "N4+N6",
      "description": "Net volume, cubic yards (variable measure trade item)",
      "regex": "(\\d{6})",
      "note": "The fourth digit (0) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nnnnnn cubic yards",
      "start": "3660",
      "end": "3665",
      "title": "VOLUME (yd³)",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "01",
        "02"
      ],
      "excludes": [
        {
          "start": "3660",
          "end": "3665"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3661",
      "formatString": "N4+N6",
      "description": "Net volume, cubic yards (variable measure trade item)",
      "regex": "(\\d{6})",
      "note": "The fourth digit (1) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nnnnn.n cubic yards",
      "start": "3660",
      "end": "3665",
      "title": "VOLUME (yd³)",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "01",
        "02"
      ],
      "excludes": [
        {
          "start": "3660",
          "end": "3665"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3662",
      "formatString": "N4+N6",
      "description": "Net volume, cubic yards (variable measure trade item)",
      "regex": "(\\d{6})",
      "note": "The fourth digit (2) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nnnn.nn cubic yards",
      "start": "3660",
      "end": "3665",
      "title": "VOLUME (yd³)",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "01",
        "02"
      ],
      "excludes": [
        {
          "start": "3660",
          "end": "3665"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3663",
      "formatString": "N4+N6",
      "description": "Net volume, cubic yards (variable measure trade item)",
      "regex": "(\\d{6})",
      "note": "The fourth digit (3) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nnn.nnn cubic yards",
      "start": "3660",
      "end": "3665",
      "title": "VOLUME (yd³)",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "01",
        "02"
      ],
      "excludes": [
        {
          "start": "3660",
          "end": "3665"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3664",
      "formatString": "N4+N6",
      "description": "Net volume, cubic yards (variable measure trade item)",
      "regex": "(\\d{6})",
      "note": "The fourth digit (4) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nn.nnnn cubic yards",
      "start": "3660",
      "end": "3665",
      "title": "VOLUME (yd³)",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "01",
        "02"
      ],
      "excludes": [
        {
          "start": "3660",
          "end": "3665"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3665",
      "formatString": "N4+N6",
      "description": "Net volume, cubic yards (variable measure trade item)",
      "regex": "(\\d{6})",
      "note": "The fourth digit (5) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = n.nnnnn cubic yards",
      "start": "3660",
      "end": "3665",
      "title": "VOLUME (yd³)",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "01",
        "02"
      ],
      "excludes": [
        {
          "start": "3660",
          "end": "3665"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3670",
      "formatString": "N4+N6",
      "description": "Logistic volume, cubic inches",
      "regex": "(\\d{6})",
      "note": "The fourth digit (0) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nnnnnn cubic inches",
      "start": "3670",
      "end": "3675",
      "title": "VOLUME (in³), log",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "00",
        "01"
      ],
      "excludes": [
        {
          "start": "3670",
          "end": "3675"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3671",
      "formatString": "N4+N6",
      "description": "Logistic volume, cubic inches",
      "regex": "(\\d{6})",
      "note": "The fourth digit (1) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nnnnn.n cubic inches",
      "start": "3670",
      "end": "3675",
      "title": "VOLUME (in³), log",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "00",
        "01"
      ],
      "excludes": [
        {
          "start": "3670",
          "end": "3675"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3672",
      "formatString": "N4+N6",
      "description": "Logistic volume, cubic inches",
      "regex": "(\\d{6})",
      "note": "The fourth digit (2) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nnnn.nn cubic inches",
      "start": "3670",
      "end": "3675",
      "title": "VOLUME (in³), log",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "00",
        "01"
      ],
      "excludes": [
        {
          "start": "3670",
          "end": "3675"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3673",
      "formatString": "N4+N6",
      "description": "Logistic volume, cubic inches",
      "regex": "(\\d{6})",
      "note": "The fourth digit (3) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nnn.nnn cubic inches",
      "start": "3670",
      "end": "3675",
      "title": "VOLUME (in³), log",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "00",
        "01"
      ],
      "excludes": [
        {
          "start": "3670",
          "end": "3675"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3674",
      "formatString": "N4+N6",
      "description": "Logistic volume, cubic inches",
      "regex": "(\\d{6})",
      "note": "The fourth digit (4) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nn.nnnn cubic inches",
      "start": "3670",
      "end": "3675",
      "title": "VOLUME (in³), log",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "00",
        "01"
      ],
      "excludes": [
        {
          "start": "3670",
          "end": "3675"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3675",
      "formatString": "N4+N6",
      "description": "Logistic volume, cubic inches",
      "regex": "(\\d{6})",
      "note": "The fourth digit (5) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = n.nnnnn cubic inches",
      "start": "3670",
      "end": "3675",
      "title": "VOLUME (in³), log",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "00",
        "01"
      ],
      "excludes": [
        {
          "start": "3670",
          "end": "3675"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3680",
      "formatString": "N4+N6",
      "description": "Logistic volume, cubic feet",
      "regex": "(\\d{6})",
      "note": "The fourth digit (0) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nnnnnn cubic feet",
      "start": "3680",
      "end": "3685",
      "title": "VOLUME (ft³), log",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "00",
        "01"
      ],
      "excludes": [
        {
          "start": "3680",
          "end": "3685"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3681",
      "formatString": "N4+N6",
      "description": "Logistic volume, cubic feet",
      "regex": "(\\d{6})",
      "note": "The fourth digit (1) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nnnnn.n cubic feet",
      "start": "3680",
      "end": "3685",
      "title": "VOLUME (ft³), log",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "00",
        "01"
      ],
      "excludes": [
        {
          "start": "3680",
          "end": "3685"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3682",
      "formatString": "N4+N6",
      "description": "Logistic volume, cubic feet",
      "regex": "(\\d{6})",
      "note": "The fourth digit (2) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nnnn.nn cubic feet",
      "start": "3680",
      "end": "3685",
      "title": "VOLUME (ft³), log",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "00",
        "01"
      ],
      "excludes": [
        {
          "start": "3680",
          "end": "3685"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3683",
      "formatString": "N4+N6",
      "description": "Logistic volume, cubic feet",
      "regex": "(\\d{6})",
      "note": "The fourth digit (3) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nnn.nnn cubic feet",
      "start": "3680",
      "end": "3685",
      "title": "VOLUME (ft³), log",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "00",
        "01"
      ],
      "excludes": [
        {
          "start": "3680",
          "end": "3685"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3684",
      "formatString": "N4+N6",
      "description": "Logistic volume, cubic feet",
      "regex": "(\\d{6})",
      "note": "The fourth digit (4) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nn.nnnn cubic feet",
      "start": "3680",
      "end": "3685",
      "title": "VOLUME (ft³), log",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "00",
        "01"
      ],
      "excludes": [
        {
          "start": "3680",
          "end": "3685"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3685",
      "formatString": "N4+N6",
      "description": "Logistic volume, cubic feet",
      "regex": "(\\d{6})",
      "note": "The fourth digit (5) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = n.nnnnn cubic feet",
      "start": "3680",
      "end": "3685",
      "title": "VOLUME (ft³), log",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "00",
        "01"
      ],
      "excludes": [
        {
          "start": "3680",
          "end": "3685"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3690",
      "formatString": "N4+N6",
      "description": "Logistic volume, cubic yards",
      "regex": "(\\d{6})",
      "note": "The fourth digit (0) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nnnnnn cubic yards",
      "start": "3690",
      "end": "3695",
      "title": "VOLUME (yd³), log",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "00",
        "01"
      ],
      "excludes": [
        {
          "start": "3690",
          "end": "3695"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3691",
      "formatString": "N4+N6",
      "description": "Logistic volume, cubic yards",
      "regex": "(\\d{6})",
      "note": "The fourth digit (1) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nnnnn.n cubic yards",
      "start": "3690",
      "end": "3695",
      "title": "VOLUME (yd³), log",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "00",
        "01"
      ],
      "excludes": [
        {
          "start": "3690",
          "end": "3695"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3692",
      "formatString": "N4+N6",
      "description": "Logistic volume, cubic yards",
      "regex": "(\\d{6})",
      "note": "The fourth digit (2) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nnnn.nn cubic yards",
      "start": "3690",
      "end": "3695",
      "title": "VOLUME (yd³), log",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "00",
        "01"
      ],
      "excludes": [
        {
          "start": "3690",
          "end": "3695"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3693",
      "formatString": "N4+N6",
      "description": "Logistic volume, cubic yards",
      "regex": "(\\d{6})",
      "note": "The fourth digit (3) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nnn.nnn cubic yards",
      "start": "3690",
      "end": "3695",
      "title": "VOLUME (yd³), log",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "00",
        "01"
      ],
      "excludes": [
        {
          "start": "3690",
          "end": "3695"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3694",
      "formatString": "N4+N6",
      "description": "Logistic volume, cubic yards",
      "regex": "(\\d{6})",
      "note": "The fourth digit (4) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = nn.nnnn cubic yards",
      "start": "3690",
      "end": "3695",
      "title": "VOLUME (yd³), log",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "00",
        "01"
      ],
      "excludes": [
        {
          "start": "3690",
          "end": "3695"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3695",
      "formatString": "N4+N6",
      "description": "Logistic volume, cubic yards",
      "regex": "(\\d{6})",
      "note": "The fourth digit (5) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N6 = n.nnnnn cubic yards",
      "start": "3690",
      "end": "3695",
      "title": "VOLUME (yd³), log",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "00",
        "01"
      ],
      "excludes": [
        {
          "start": "3690",
          "end": "3695"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "37",
      "formatString": "N2+N..8",
      "description": "Count of trade items or trade item pieces contained in a logistic unit",
      "regex": "(\\d{1,8})",
      "note": "",
      "title": "COUNT",
      "separatorRequired": true,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": false,
          "length": 8
        }
      ],
      "requires": [
        [
          "00",
          "02"
        ],
        [
          "00",
          "8026"
        ]
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3900",
      "formatString": "N4+N..15",
      "description": "Applicable amount payable or Coupon value, local currency",
      "regex": "(\\d{1,15})",
      "note": "The fourth digit (0) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N..15 is a floating-point value with 0 decimal places in units of local currency",
      "start": "3900",
      "end": "3909",
      "title": "AMOUNT",
      "separatorRequired": true,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": false,
          "length": 15
        }
      ],
      "requires": [
        "255",
        [
          "8020",
          "415"
        ]
      ],
      "excludes": [
        {
          "start": "3900",
          "end": "3909"
        },
        {
          "start": "3910",
          "end": "3919"
        },
        {
          "start": "3940",
          "end": "3943"
        },
        "8111"
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3901",
      "formatString": "N4+N..15",
      "description": "Applicable amount payable or Coupon value, local currency",
      "regex": "(\\d{1,15})",
      "note": "The fourth digit (1) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N..15 is a floating-point value with 1 decimal places in units of local currency",
      "start": "3900",
      "end": "3909",
      "title": "AMOUNT",
      "separatorRequired": true,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": false,
          "length": 15
        }
      ],
      "requires": [
        "255",
        [
          "8020",
          "415"
        ]
      ],
      "excludes": [
        {
          "start": "3900",
          "end": "3909"
        },
        {
          "start": "3910",
          "end": "3919"
        },
        {
          "start": "3940",
          "end": "3943"
        },
        "8111"
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3902",
      "formatString": "N4+N..15",
      "description": "Applicable amount payable or Coupon value, local currency",
      "regex": "(\\d{1,15})",
      "note": "The fourth digit (2) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N..15 is a floating-point value with 2 decimal places in units of local currency",
      "start": "3900",
      "end": "3909",
      "title": "AMOUNT",
      "separatorRequired": true,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": false,
          "length": 15
        }
      ],
      "requires": [
        "255",
        [
          "8020",
          "415"
        ]
      ],
      "excludes": [
        {
          "start": "3900",
          "end": "3909"
        },
        {
          "start": "3910",
          "end": "3919"
        },
        {
          "start": "3940",
          "end": "3943"
        },
        "8111"
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3903",
      "formatString": "N4+N..15",
      "description": "Applicable amount payable or Coupon value, local currency",
      "regex": "(\\d{1,15})",
      "note": "The fourth digit (3) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N..15 is a floating-point value with 3 decimal places in units of local currency",
      "start": "3900",
      "end": "3909",
      "title": "AMOUNT",
      "separatorRequired": true,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": false,
          "length": 15
        }
      ],
      "requires": [
        "255",
        [
          "8020",
          "415"
        ]
      ],
      "excludes": [
        {
          "start": "3900",
          "end": "3909"
        },
        {
          "start": "3910",
          "end": "3919"
        },
        {
          "start": "3940",
          "end": "3943"
        },
        "8111"
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3904",
      "formatString": "N4+N..15",
      "description": "Applicable amount payable or Coupon value, local currency",
      "regex": "(\\d{1,15})",
      "note": "The fourth digit (4) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N..15 is a floating-point value with 4 decimal places in units of local currency",
      "start": "3900",
      "end": "3909",
      "title": "AMOUNT",
      "separatorRequired": true,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": false,
          "length": 15
        }
      ],
      "requires": [
        "255",
        [
          "8020",
          "415"
        ]
      ],
      "excludes": [
        {
          "start": "3900",
          "end": "3909"
        },
        {
          "start": "3910",
          "end": "3919"
        },
        {
          "start": "3940",
          "end": "3943"
        },
        "8111"
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3905",
      "formatString": "N4+N..15",
      "description": "Applicable amount payable or Coupon value, local currency",
      "regex": "(\\d{1,15})",
      "note": "The fourth digit (5) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N..15 is a floating-point value with 5 decimal places in units of local currency",
      "start": "3900",
      "end": "3909",
      "title": "AMOUNT",
      "separatorRequired": true,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": false,
          "length": 15
        }
      ],
      "requires": [
        "255",
        [
          "8020",
          "415"
        ]
      ],
      "excludes": [
        {
          "start": "3900",
          "end": "3909"
        },
        {
          "start": "3910",
          "end": "3919"
        },
        {
          "start": "3940",
          "end": "3943"
        },
        "8111"
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3906",
      "formatString": "N4+N..15",
      "description": "Applicable amount payable or Coupon value, local currency",
      "regex": "(\\d{1,15})",
      "note": "The fourth digit (6) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N..15 is a floating-point value with 6 decimal places in units of local currency",
      "start": "3900",
      "end": "3909",
      "title": "AMOUNT",
      "separatorRequired": true,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": false,
          "length": 15
        }
      ],
      "requires": [
        "255",
        [
          "8020",
          "415"
        ]
      ],
      "excludes": [
        {
          "start": "3900",
          "end": "3909"
        },
        {
          "start": "3910",
          "end": "3919"
        },
        {
          "start": "3940",
          "end": "3943"
        },
        "8111"
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3907",
      "formatString": "N4+N..15",
      "description": "Applicable amount payable or Coupon value, local currency",
      "regex": "(\\d{1,15})",
      "note": "The fourth digit (7) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N..15 is a floating-point value with 7 decimal places in units of local currency",
      "start": "3900",
      "end": "3909",
      "title": "AMOUNT",
      "separatorRequired": true,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": false,
          "length": 15
        }
      ],
      "requires": [
        "255",
        [
          "8020",
          "415"
        ]
      ],
      "excludes": [
        {
          "start": "3900",
          "end": "3909"
        },
        {
          "start": "3910",
          "end": "3919"
        },
        {
          "start": "3940",
          "end": "3943"
        },
        "8111"
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3908",
      "formatString": "N4+N..15",
      "description": "Applicable amount payable or Coupon value, local currency",
      "regex": "(\\d{1,15})",
      "note": "The fourth digit (8) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N..15 is a floating-point value with 8 decimal places in units of local currency",
      "start": "3900",
      "end": "3909",
      "title": "AMOUNT",
      "separatorRequired": true,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": false,
          "length": 15
        }
      ],
      "requires": [
        "255",
        [
          "8020",
          "415"
        ]
      ],
      "excludes": [
        {
          "start": "3900",
          "end": "3909"
        },
        {
          "start": "3910",
          "end": "3919"
        },
        {
          "start": "3940",
          "end": "3943"
        },
        "8111"
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3909",
      "formatString": "N4+N..15",
      "description": "Applicable amount payable or Coupon value, local currency",
      "regex": "(\\d{1,15})",
      "note": "The fourth digit (9) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N..15 is a floating-point value with 9 decimal places in units of local currency",
      "start": "3900",
      "end": "3909",
      "title": "AMOUNT",
      "separatorRequired": true,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": false,
          "length": 15
        }
      ],
      "requires": [
        "255",
        [
          "8020",
          "415"
        ]
      ],
      "excludes": [
        {
          "start": "3900",
          "end": "3909"
        },
        {
          "start": "3910",
          "end": "3919"
        },
        {
          "start": "3940",
          "end": "3943"
        },
        "8111"
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3910",
      "formatString": "N4+N3+N..15",
      "description": "Applicable amount payable with ISO currency code",
      "regex": "(\\d{3})(\\d{1,15})",
      "note": "The fourth digit (0) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N..15 is a floating-point value with 0 decimal places in units of currency where N3 = ISO 4217 numeric currency code",
      "start": "3910",
      "end": "3919",
      "title": "AMOUNT",
      "separatorRequired": true,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 3,
          "format": "iso4217"
        },
        {
          "optional": false,
          "type": "N",
          "fixedLength": false,
          "length": 15
        }
      ],
      "requires": [
        [
          "8020",
          "415"
        ]
      ],
      "excludes": [
        {
          "start": "3910",
          "end": "3919"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3911",
      "formatString": "N4+N3+N..15",
      "description": "Applicable amount payable with ISO currency code",
      "regex": "(\\d{3})(\\d{1,15})",
      "note": "The fourth digit (1) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N..15 is a floating-point value with 1 decimal places in units of currency where N3 = ISO 4217 numeric currency code",
      "start": "3910",
      "end": "3919",
      "title": "AMOUNT",
      "separatorRequired": true,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 3,
          "format": "iso4217"
        },
        {
          "optional": false,
          "type": "N",
          "fixedLength": false,
          "length": 15
        }
      ],
      "requires": [
        [
          "8020",
          "415"
        ]
      ],
      "excludes": [
        {
          "start": "3910",
          "end": "3919"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3912",
      "formatString": "N4+N3+N..15",
      "description": "Applicable amount payable with ISO currency code",
      "regex": "(\\d{3})(\\d{1,15})",
      "note": "The fourth digit (2) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N..15 is a floating-point value with 2 decimal places in units of currency where N3 = ISO 4217 numeric currency code",
      "start": "3910",
      "end": "3919",
      "title": "AMOUNT",
      "separatorRequired": true,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 3,
          "format": "iso4217"
        },
        {
          "optional": false,
          "type": "N",
          "fixedLength": false,
          "length": 15
        }
      ],
      "requires": [
        [
          "8020",
          "415"
        ]
      ],
      "excludes": [
        {
          "start": "3910",
          "end": "3919"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3913",
      "formatString": "N4+N3+N..15",
      "description": "Applicable amount payable with ISO currency code",
      "regex": "(\\d{3})(\\d{1,15})",
      "note": "The fourth digit (3) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N..15 is a floating-point value with 3 decimal places in units of currency where N3 = ISO 4217 numeric currency code",
      "start": "3910",
      "end": "3919",
      "title": "AMOUNT",
      "separatorRequired": true,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 3,
          "format": "iso4217"
        },
        {
          "optional": false,
          "type": "N",
          "fixedLength": false,
          "length": 15
        }
      ],
      "requires": [
        [
          "8020",
          "415"
        ]
      ],
      "excludes": [
        {
          "start": "3910",
          "end": "3919"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3914",
      "formatString": "N4+N3+N..15",
      "description": "Applicable amount payable with ISO currency code",
      "regex": "(\\d{3})(\\d{1,15})",
      "note": "The fourth digit (4) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N..15 is a floating-point value with 4 decimal places in units of currency where N3 = ISO 4217 numeric currency code",
      "start": "3910",
      "end": "3919",
      "title": "AMOUNT",
      "separatorRequired": true,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 3,
          "format": "iso4217"
        },
        {
          "optional": false,
          "type": "N",
          "fixedLength": false,
          "length": 15
        }
      ],
      "requires": [
        [
          "8020",
          "415"
        ]
      ],
      "excludes": [
        {
          "start": "3910",
          "end": "3919"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3915",
      "formatString": "N4+N3+N..15",
      "description": "Applicable amount payable with ISO currency code",
      "regex": "(\\d{3})(\\d{1,15})",
      "note": "The fourth digit (5) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N..15 is a floating-point value with 5 decimal places in units of currency where N3 = ISO 4217 numeric currency code",
      "start": "3910",
      "end": "3919",
      "title": "AMOUNT",
      "separatorRequired": true,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 3,
          "format": "iso4217"
        },
        {
          "optional": false,
          "type": "N",
          "fixedLength": false,
          "length": 15
        }
      ],
      "requires": [
        [
          "8020",
          "415"
        ]
      ],
      "excludes": [
        {
          "start": "3910",
          "end": "3919"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3916",
      "formatString": "N4+N3+N..15",
      "description": "Applicable amount payable with ISO currency code",
      "regex": "(\\d{3})(\\d{1,15})",
      "note": "The fourth digit (6) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N..15 is a floating-point value with 6 decimal places in units of currency where N3 = ISO 4217 numeric currency code",
      "start": "3910",
      "end": "3919",
      "title": "AMOUNT",
      "separatorRequired": true,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 3,
          "format": "iso4217"
        },
        {
          "optional": false,
          "type": "N",
          "fixedLength": false,
          "length": 15
        }
      ],
      "requires": [
        [
          "8020",
          "415"
        ]
      ],
      "excludes": [
        {
          "start": "3910",
          "end": "3919"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3917",
      "formatString": "N4+N3+N..15",
      "description": "Applicable amount payable with ISO currency code",
      "regex": "(\\d{3})(\\d{1,15})",
      "note": "The fourth digit (7) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N..15 is a floating-point value with 7 decimal places in units of currency where N3 = ISO 4217 numeric currency code",
      "start": "3910",
      "end": "3919",
      "title": "AMOUNT",
      "separatorRequired": true,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 3,
          "format": "iso4217"
        },
        {
          "optional": false,
          "type": "N",
          "fixedLength": false,
          "length": 15
        }
      ],
      "requires": [
        [
          "8020",
          "415"
        ]
      ],
      "excludes": [
        {
          "start": "3910",
          "end": "3919"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3918",
      "formatString": "N4+N3+N..15",
      "description": "Applicable amount payable with ISO currency code",
      "regex": "(\\d{3})(\\d{1,15})",
      "note": "The fourth digit (8) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N..15 is a floating-point value with 8 decimal places in units of currency where N3 = ISO 4217 numeric currency code",
      "start": "3910",
      "end": "3919",
      "title": "AMOUNT",
      "separatorRequired": true,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 3,
          "format": "iso4217"
        },
        {
          "optional": false,
          "type": "N",
          "fixedLength": false,
          "length": 15
        }
      ],
      "requires": [
        [
          "8020",
          "415"
        ]
      ],
      "excludes": [
        {
          "start": "3910",
          "end": "3919"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3919",
      "formatString": "N4+N3+N..15",
      "description": "Applicable amount payable with ISO currency code",
      "regex": "(\\d{3})(\\d{1,15})",
      "note": "The fourth digit (9) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N..15 is a floating-point value with 9 decimal places in units of currency where N3 = ISO 4217 numeric currency code",
      "start": "3910",
      "end": "3919",
      "title": "AMOUNT",
      "separatorRequired": true,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 3,
          "format": "iso4217"
        },
        {
          "optional": false,
          "type": "N",
          "fixedLength": false,
          "length": 15
        }
      ],
      "requires": [
        [
          "8020",
          "415"
        ]
      ],
      "excludes": [
        {
          "start": "3910",
          "end": "3919"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3920",
      "formatString": "N4+N..15",
      "description": "Applicable amount payable, single monetary area (variable measure trade item)",
      "regex": "(\\d{1,15})",
      "note": "The fourth digit (0) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N..15 is a floating-point value with 0 decimal places in units of currency within the single monetary area",
      "start": "3920",
      "end": "3929",
      "title": "PRICE",
      "separatorRequired": true,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": false,
          "length": 15
        }
      ],
      "requires": [
        "30",
        {
          "start": "3100",
          "end": "3195"
        },
        {
          "start": "3200",
          "end": "3295"
        },
        {
          "start": "3500",
          "end": "3595"
        },
        {
          "start": "3600",
          "end": "3695"
        }
      ],
      "excludes": [
        {
          "start": "3920",
          "end": "3929"
        },
        {
          "start": "3930",
          "end": "3939"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3921",
      "formatString": "N4+N..15",
      "description": "Applicable amount payable, single monetary area (variable measure trade item)",
      "regex": "(\\d{1,15})",
      "note": "The fourth digit (1) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N..15 is a floating-point value with 1 decimal places in units of currency within the single monetary area",
      "start": "3920",
      "end": "3929",
      "title": "PRICE",
      "separatorRequired": true,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": false,
          "length": 15
        }
      ],
      "requires": [
        "30",
        {
          "start": "3100",
          "end": "3195"
        },
        {
          "start": "3200",
          "end": "3295"
        },
        {
          "start": "3500",
          "end": "3595"
        },
        {
          "start": "3600",
          "end": "3695"
        }
      ],
      "excludes": [
        {
          "start": "3920",
          "end": "3929"
        },
        {
          "start": "3930",
          "end": "3939"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3922",
      "formatString": "N4+N..15",
      "description": "Applicable amount payable, single monetary area (variable measure trade item)",
      "regex": "(\\d{1,15})",
      "note": "The fourth digit (2) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N..15 is a floating-point value with 2 decimal places in units of currency within the single monetary area",
      "start": "3920",
      "end": "3929",
      "title": "PRICE",
      "separatorRequired": true,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": false,
          "length": 15
        }
      ],
      "requires": [
        "30",
        {
          "start": "3100",
          "end": "3195"
        },
        {
          "start": "3200",
          "end": "3295"
        },
        {
          "start": "3500",
          "end": "3595"
        },
        {
          "start": "3600",
          "end": "3695"
        }
      ],
      "excludes": [
        {
          "start": "3920",
          "end": "3929"
        },
        {
          "start": "3930",
          "end": "3939"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3923",
      "formatString": "N4+N..15",
      "description": "Applicable amount payable, single monetary area (variable measure trade item)",
      "regex": "(\\d{1,15})",
      "note": "The fourth digit (3) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N..15 is a floating-point value with 3 decimal places in units of currency within the single monetary area",
      "start": "3920",
      "end": "3929",
      "title": "PRICE",
      "separatorRequired": true,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": false,
          "length": 15
        }
      ],
      "requires": [
        "30",
        {
          "start": "3100",
          "end": "3195"
        },
        {
          "start": "3200",
          "end": "3295"
        },
        {
          "start": "3500",
          "end": "3595"
        },
        {
          "start": "3600",
          "end": "3695"
        }
      ],
      "excludes": [
        {
          "start": "3920",
          "end": "3929"
        },
        {
          "start": "3930",
          "end": "3939"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3924",
      "formatString": "N4+N..15",
      "description": "Applicable amount payable, single monetary area (variable measure trade item)",
      "regex": "(\\d{1,15})",
      "note": "The fourth digit (4) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N..15 is a floating-point value with 4 decimal places in units of currency within the single monetary area",
      "start": "3920",
      "end": "3929",
      "title": "PRICE",
      "separatorRequired": true,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": false,
          "length": 15
        }
      ],
      "requires": [
        "30",
        {
          "start": "3100",
          "end": "3195"
        },
        {
          "start": "3200",
          "end": "3295"
        },
        {
          "start": "3500",
          "end": "3595"
        },
        {
          "start": "3600",
          "end": "3695"
        }
      ],
      "excludes": [
        {
          "start": "3920",
          "end": "3929"
        },
        {
          "start": "3930",
          "end": "3939"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3925",
      "formatString": "N4+N..15",
      "description": "Applicable amount payable, single monetary area (variable measure trade item)",
      "regex": "(\\d{1,15})",
      "note": "The fourth digit (5) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N..15 is a floating-point value with 5 decimal places in units of currency within the single monetary area",
      "start": "3920",
      "end": "3929",
      "title": "PRICE",
      "separatorRequired": true,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": false,
          "length": 15
        }
      ],
      "requires": [
        "30",
        {
          "start": "3100",
          "end": "3195"
        },
        {
          "start": "3200",
          "end": "3295"
        },
        {
          "start": "3500",
          "end": "3595"
        },
        {
          "start": "3600",
          "end": "3695"
        }
      ],
      "excludes": [
        {
          "start": "3920",
          "end": "3929"
        },
        {
          "start": "3930",
          "end": "3939"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3926",
      "formatString": "N4+N..15",
      "description": "Applicable amount payable, single monetary area (variable measure trade item)",
      "regex": "(\\d{1,15})",
      "note": "The fourth digit (6) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N..15 is a floating-point value with 6 decimal places in units of currency within the single monetary area",
      "start": "3920",
      "end": "3929",
      "title": "PRICE",
      "separatorRequired": true,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": false,
          "length": 15
        }
      ],
      "requires": [
        "30",
        {
          "start": "3100",
          "end": "3195"
        },
        {
          "start": "3200",
          "end": "3295"
        },
        {
          "start": "3500",
          "end": "3595"
        },
        {
          "start": "3600",
          "end": "3695"
        }
      ],
      "excludes": [
        {
          "start": "3920",
          "end": "3929"
        },
        {
          "start": "3930",
          "end": "3939"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3927",
      "formatString": "N4+N..15",
      "description": "Applicable amount payable, single monetary area (variable measure trade item)",
      "regex": "(\\d{1,15})",
      "note": "The fourth digit (7) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N..15 is a floating-point value with 7 decimal places in units of currency within the single monetary area",
      "start": "3920",
      "end": "3929",
      "title": "PRICE",
      "separatorRequired": true,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": false,
          "length": 15
        }
      ],
      "requires": [
        "30",
        {
          "start": "3100",
          "end": "3195"
        },
        {
          "start": "3200",
          "end": "3295"
        },
        {
          "start": "3500",
          "end": "3595"
        },
        {
          "start": "3600",
          "end": "3695"
        }
      ],
      "excludes": [
        {
          "start": "3920",
          "end": "3929"
        },
        {
          "start": "3930",
          "end": "3939"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3928",
      "formatString": "N4+N..15",
      "description": "Applicable amount payable, single monetary area (variable measure trade item)",
      "regex": "(\\d{1,15})",
      "note": "The fourth digit (8) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N..15 is a floating-point value with 8 decimal places in units of currency within the single monetary area",
      "start": "3920",
      "end": "3929",
      "title": "PRICE",
      "separatorRequired": true,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": false,
          "length": 15
        }
      ],
      "requires": [
        "30",
        {
          "start": "3100",
          "end": "3195"
        },
        {
          "start": "3200",
          "end": "3295"
        },
        {
          "start": "3500",
          "end": "3595"
        },
        {
          "start": "3600",
          "end": "3695"
        }
      ],
      "excludes": [
        {
          "start": "3920",
          "end": "3929"
        },
        {
          "start": "3930",
          "end": "3939"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3929",
      "formatString": "N4+N..15",
      "description": "Applicable amount payable, single monetary area (variable measure trade item)",
      "regex": "(\\d{1,15})",
      "note": "The fourth digit (9) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N..15 is a floating-point value with 9 decimal places in units of currency within the single monetary area",
      "start": "3920",
      "end": "3929",
      "title": "PRICE",
      "separatorRequired": true,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": false,
          "length": 15
        }
      ],
      "requires": [
        "30",
        {
          "start": "3100",
          "end": "3195"
        },
        {
          "start": "3200",
          "end": "3295"
        },
        {
          "start": "3500",
          "end": "3595"
        },
        {
          "start": "3600",
          "end": "3695"
        }
      ],
      "excludes": [
        {
          "start": "3920",
          "end": "3929"
        },
        {
          "start": "3930",
          "end": "3939"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3930",
      "formatString": "N4+N3+N..15",
      "description": "Applicable amount payable with ISO currency code (variable measure trade item)",
      "regex": "(\\d{3})(\\d{1,15})",
      "note": "The fourth digit (0) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N..15 is a floating-point value with 0 decimal places in units of currency where N3 = ISO 4217 numeric currency code",
      "start": "3930",
      "end": "3939",
      "title": "PRICE",
      "separatorRequired": true,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 3,
          "format": "iso4217"
        },
        {
          "optional": false,
          "type": "N",
          "fixedLength": false,
          "length": 15
        }
      ],
      "requires": [
        "30",
        {
          "start": "3100",
          "end": "3195"
        },
        {
          "start": "3200",
          "end": "3295"
        },
        {
          "start": "3500",
          "end": "3595"
        },
        {
          "start": "3600",
          "end": "3695"
        }
      ],
      "excludes": [
        {
          "start": "3930",
          "end": "3939"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3931",
      "formatString": "N4+N3+N..15",
      "description": "Applicable amount payable with ISO currency code (variable measure trade item)",
      "regex": "(\\d{3})(\\d{1,15})",
      "note": "The fourth digit (1) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N..15 is a floating-point value with 1 decimal places in units of currency where N3 = ISO 4217 numeric currency code",
      "start": "3930",
      "end": "3939",
      "title": "PRICE",
      "separatorRequired": true,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 3,
          "format": "iso4217"
        },
        {
          "optional": false,
          "type": "N",
          "fixedLength": false,
          "length": 15
        }
      ],
      "requires": [
        "30",
        {
          "start": "3100",
          "end": "3195"
        },
        {
          "start": "3200",
          "end": "3295"
        },
        {
          "start": "3500",
          "end": "3595"
        },
        {
          "start": "3600",
          "end": "3695"
        }
      ],
      "excludes": [
        {
          "start": "3930",
          "end": "3939"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3932",
      "formatString": "N4+N3+N..15",
      "description": "Applicable amount payable with ISO currency code (variable measure trade item)",
      "regex": "(\\d{3})(\\d{1,15})",
      "note": "The fourth digit (2) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N..15 is a floating-point value with 2 decimal places in units of currency where N3 = ISO 4217 numeric currency code",
      "start": "3930",
      "end": "3939",
      "title": "PRICE",
      "separatorRequired": true,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 3,
          "format": "iso4217"
        },
        {
          "optional": false,
          "type": "N",
          "fixedLength": false,
          "length": 15
        }
      ],
      "requires": [
        "30",
        {
          "start": "3100",
          "end": "3195"
        },
        {
          "start": "3200",
          "end": "3295"
        },
        {
          "start": "3500",
          "end": "3595"
        },
        {
          "start": "3600",
          "end": "3695"
        }
      ],
      "excludes": [
        {
          "start": "3930",
          "end": "3939"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3933",
      "formatString": "N4+N3+N..15",
      "description": "Applicable amount payable with ISO currency code (variable measure trade item)",
      "regex": "(\\d{3})(\\d{1,15})",
      "note": "The fourth digit (3) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N..15 is a floating-point value with 3 decimal places in units of currency where N3 = ISO 4217 numeric currency code",
      "start": "3930",
      "end": "3939",
      "title": "PRICE",
      "separatorRequired": true,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 3,
          "format": "iso4217"
        },
        {
          "optional": false,
          "type": "N",
          "fixedLength": false,
          "length": 15
        }
      ],
      "requires": [
        "30",
        {
          "start": "3100",
          "end": "3195"
        },
        {
          "start": "3200",
          "end": "3295"
        },
        {
          "start": "3500",
          "end": "3595"
        },
        {
          "start": "3600",
          "end": "3695"
        }
      ],
      "excludes": [
        {
          "start": "3930",
          "end": "3939"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3934",
      "formatString": "N4+N3+N..15",
      "description": "Applicable amount payable with ISO currency code (variable measure trade item)",
      "regex": "(\\d{3})(\\d{1,15})",
      "note": "The fourth digit (4) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N..15 is a floating-point value with 4 decimal places in units of currency where N3 = ISO 4217 numeric currency code",
      "start": "3930",
      "end": "3939",
      "title": "PRICE",
      "separatorRequired": true,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 3,
          "format": "iso4217"
        },
        {
          "optional": false,
          "type": "N",
          "fixedLength": false,
          "length": 15
        }
      ],
      "requires": [
        "30",
        {
          "start": "3100",
          "end": "3195"
        },
        {
          "start": "3200",
          "end": "3295"
        },
        {
          "start": "3500",
          "end": "3595"
        },
        {
          "start": "3600",
          "end": "3695"
        }
      ],
      "excludes": [
        {
          "start": "3930",
          "end": "3939"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3935",
      "formatString": "N4+N3+N..15",
      "description": "Applicable amount payable with ISO currency code (variable measure trade item)",
      "regex": "(\\d{3})(\\d{1,15})",
      "note": "The fourth digit (5) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N..15 is a floating-point value with 5 decimal places in units of currency where N3 = ISO 4217 numeric currency code",
      "start": "3930",
      "end": "3939",
      "title": "PRICE",
      "separatorRequired": true,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 3,
          "format": "iso4217"
        },
        {
          "optional": false,
          "type": "N",
          "fixedLength": false,
          "length": 15
        }
      ],
      "requires": [
        "30",
        {
          "start": "3100",
          "end": "3195"
        },
        {
          "start": "3200",
          "end": "3295"
        },
        {
          "start": "3500",
          "end": "3595"
        },
        {
          "start": "3600",
          "end": "3695"
        }
      ],
      "excludes": [
        {
          "start": "3930",
          "end": "3939"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3936",
      "formatString": "N4+N3+N..15",
      "description": "Applicable amount payable with ISO currency code (variable measure trade item)",
      "regex": "(\\d{3})(\\d{1,15})",
      "note": "The fourth digit (6) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N..15 is a floating-point value with 6 decimal places in units of currency where N3 = ISO 4217 numeric currency code",
      "start": "3930",
      "end": "3939",
      "title": "PRICE",
      "separatorRequired": true,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 3,
          "format": "iso4217"
        },
        {
          "optional": false,
          "type": "N",
          "fixedLength": false,
          "length": 15
        }
      ],
      "requires": [
        "30",
        {
          "start": "3100",
          "end": "3195"
        },
        {
          "start": "3200",
          "end": "3295"
        },
        {
          "start": "3500",
          "end": "3595"
        },
        {
          "start": "3600",
          "end": "3695"
        }
      ],
      "excludes": [
        {
          "start": "3930",
          "end": "3939"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3937",
      "formatString": "N4+N3+N..15",
      "description": "Applicable amount payable with ISO currency code (variable measure trade item)",
      "regex": "(\\d{3})(\\d{1,15})",
      "note": "The fourth digit (7) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N..15 is a floating-point value with 7 decimal places in units of currency where N3 = ISO 4217 numeric currency code",
      "start": "3930",
      "end": "3939",
      "title": "PRICE",
      "separatorRequired": true,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 3,
          "format": "iso4217"
        },
        {
          "optional": false,
          "type": "N",
          "fixedLength": false,
          "length": 15
        }
      ],
      "requires": [
        "30",
        {
          "start": "3100",
          "end": "3195"
        },
        {
          "start": "3200",
          "end": "3295"
        },
        {
          "start": "3500",
          "end": "3595"
        },
        {
          "start": "3600",
          "end": "3695"
        }
      ],
      "excludes": [
        {
          "start": "3930",
          "end": "3939"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3938",
      "formatString": "N4+N3+N..15",
      "description": "Applicable amount payable with ISO currency code (variable measure trade item)",
      "regex": "(\\d{3})(\\d{1,15})",
      "note": "The fourth digit (8) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N..15 is a floating-point value with 8 decimal places in units of currency where N3 = ISO 4217 numeric currency code",
      "start": "3930",
      "end": "3939",
      "title": "PRICE",
      "separatorRequired": true,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 3,
          "format": "iso4217"
        },
        {
          "optional": false,
          "type": "N",
          "fixedLength": false,
          "length": 15
        }
      ],
      "requires": [
        "30",
        {
          "start": "3100",
          "end": "3195"
        },
        {
          "start": "3200",
          "end": "3295"
        },
        {
          "start": "3500",
          "end": "3595"
        },
        {
          "start": "3600",
          "end": "3695"
        }
      ],
      "excludes": [
        {
          "start": "3930",
          "end": "3939"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3939",
      "formatString": "N4+N3+N..15",
      "description": "Applicable amount payable with ISO currency code (variable measure trade item)",
      "regex": "(\\d{3})(\\d{1,15})",
      "note": "The fourth digit (9) of this AI indicates the number of decimal places (see GS1 General Specifications for details). i.e. N..15 is a floating-point value with 9 decimal places in units of currency where N3 = ISO 4217 numeric currency code",
      "start": "3930",
      "end": "3939",
      "title": "PRICE",
      "separatorRequired": true,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 3,
          "format": "iso4217"
        },
        {
          "optional": false,
          "type": "N",
          "fixedLength": false,
          "length": 15
        }
      ],
      "requires": [
        "30",
        {
          "start": "3100",
          "end": "3195"
        },
        {
          "start": "3200",
          "end": "3295"
        },
        {
          "start": "3500",
          "end": "3595"
        },
        {
          "start": "3600",
          "end": "3695"
        }
      ],
      "excludes": [
        {
          "start": "3930",
          "end": "3939"
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3940",
      "formatString": "N4+N4",
      "description": "Percentage discount of a coupon",
      "regex": "(\\d{4})",
      "note": "The fourth digit (0) of this AI indicates the number of decimal places (see GS1 General Specifications for details).",
      "start": "3940",
      "end": "3943",
      "title": "PRCNT OFF",
      "separatorRequired": true,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 4
        }
      ],
      "requires": [
        "255"
      ],
      "excludes": [
        {
          "start": "3940",
          "end": "3943"
        },
        "8111"
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3941",
      "formatString": "N4+N4",
      "description": "Percentage discount of a coupon",
      "regex": "(\\d{4})",
      "note": "The fourth digit (1) of this AI indicates the number of decimal places (see GS1 General Specifications for details).",
      "start": "3940",
      "end": "3943",
      "title": "PRCNT OFF",
      "separatorRequired": true,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 4
        }
      ],
      "requires": [
        "255"
      ],
      "excludes": [
        {
          "start": "3940",
          "end": "3943"
        },
        "8111"
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3942",
      "formatString": "N4+N4",
      "description": "Percentage discount of a coupon",
      "regex": "(\\d{4})",
      "note": "The fourth digit (2) of this AI indicates the number of decimal places (see GS1 General Specifications for details).",
      "start": "3940",
      "end": "3943",
      "title": "PRCNT OFF",
      "separatorRequired": true,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 4
        }
      ],
      "requires": [
        "255"
      ],
      "excludes": [
        {
          "start": "3940",
          "end": "3943"
        },
        "8111"
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3943",
      "formatString": "N4+N4",
      "description": "Percentage discount of a coupon",
      "regex": "(\\d{4})",
      "note": "The fourth digit (3) of this AI indicates the number of decimal places (see GS1 General Specifications for details).",
      "start": "3940",
      "end": "3943",
      "title": "PRCNT OFF",
      "separatorRequired": true,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 4
        }
      ],
      "requires": [
        "255"
      ],
      "excludes": [
        {
          "start": "3940",
          "end": "3943"
        },
        "8111"
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3950",
      "formatString": "N4+N6",
      "description": "Amount Payable per unit of measure single monetary area (variable measure trade item)",
      "regex": "(\\d{6})",
      "note": "\"The fourth digit of this AI indicates the number of decimal places. For example if the fourth digit is 3 the decimal is in the 3rd position (nnn.nnn), if the fourth digit is 1 the decimal is in the 1st position (nnnnn.n). See GS1 General Specifications for full details.\"",
      "start": "3950",
      "end": "3955",
      "title": "PRICE/UoM",
      "separatorRequired": true,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "30",
        {
          "start": "3100",
          "end": "3195"
        },
        {
          "start": "3200",
          "end": "3295"
        },
        {
          "start": "3500",
          "end": "3595"
        },
        {
          "start": "3600",
          "end": "3695"
        }
      ],
      "excludes": [
        {
          "start": "3920",
          "end": "3929"
        },
        {
          "start": "3930",
          "end": "3939"
        },
        {
          "start": "3950",
          "end": "3955"
        },
        "8005"
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3951",
      "formatString": "N4+N6",
      "description": "Amount Payable per unit of measure single monetary area (variable measure trade item)",
      "regex": "(\\d{6})",
      "note": "\"The fourth digit of this AI indicates the number of decimal places. For example if the fourth digit is 3 the decimal is in the 3rd position (nnn.nnn), if the fourth digit is 1 the decimal is in the 1st position (nnnnn.n). See GS1 General Specifications for full details.\"",
      "start": "3950",
      "end": "3955",
      "title": "PRICE/UoM",
      "separatorRequired": true,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "30",
        {
          "start": "3100",
          "end": "3195"
        },
        {
          "start": "3200",
          "end": "3295"
        },
        {
          "start": "3500",
          "end": "3595"
        },
        {
          "start": "3600",
          "end": "3695"
        }
      ],
      "excludes": [
        {
          "start": "3920",
          "end": "3929"
        },
        {
          "start": "3930",
          "end": "3939"
        },
        {
          "start": "3950",
          "end": "3955"
        },
        "8005"
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3952",
      "formatString": "N4+N6",
      "description": "Amount Payable per unit of measure single monetary area (variable measure trade item)",
      "regex": "(\\d{6})",
      "note": "\"The fourth digit of this AI indicates the number of decimal places. For example if the fourth digit is 3 the decimal is in the 3rd position (nnn.nnn), if the fourth digit is 1 the decimal is in the 1st position (nnnnn.n). See GS1 General Specifications for full details.\"",
      "start": "3950",
      "end": "3955",
      "title": "PRICE/UoM",
      "separatorRequired": true,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "30",
        {
          "start": "3100",
          "end": "3195"
        },
        {
          "start": "3200",
          "end": "3295"
        },
        {
          "start": "3500",
          "end": "3595"
        },
        {
          "start": "3600",
          "end": "3695"
        }
      ],
      "excludes": [
        {
          "start": "3920",
          "end": "3929"
        },
        {
          "start": "3930",
          "end": "3939"
        },
        {
          "start": "3950",
          "end": "3955"
        },
        "8005"
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3953",
      "formatString": "N4+N6",
      "description": "Amount Payable per unit of measure single monetary area (variable measure trade item)",
      "regex": "(\\d{6})",
      "note": "\"The fourth digit of this AI indicates the number of decimal places. For example if the fourth digit is 3 the decimal is in the 3rd position (nnn.nnn), if the fourth digit is 1 the decimal is in the 1st position (nnnnn.n). See GS1 General Specifications for full details.\"",
      "start": "3950",
      "end": "3955",
      "title": "PRICE/UoM",
      "separatorRequired": true,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "30",
        {
          "start": "3100",
          "end": "3195"
        },
        {
          "start": "3200",
          "end": "3295"
        },
        {
          "start": "3500",
          "end": "3595"
        },
        {
          "start": "3600",
          "end": "3695"
        }
      ],
      "excludes": [
        {
          "start": "3920",
          "end": "3929"
        },
        {
          "start": "3930",
          "end": "3939"
        },
        {
          "start": "3950",
          "end": "3955"
        },
        "8005"
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3954",
      "formatString": "N4+N6",
      "description": "Amount Payable per unit of measure single monetary area (variable measure trade item)",
      "regex": "(\\d{6})",
      "note": "\"The fourth digit of this AI indicates the number of decimal places. For example if the fourth digit is 3 the decimal is in the 3rd position (nnn.nnn), if the fourth digit is 1 the decimal is in the 1st position (nnnnn.n). See GS1 General Specifications for full details.\"",
      "start": "3950",
      "end": "3955",
      "title": "PRICE/UoM",
      "separatorRequired": true,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "30",
        {
          "start": "3100",
          "end": "3195"
        },
        {
          "start": "3200",
          "end": "3295"
        },
        {
          "start": "3500",
          "end": "3595"
        },
        {
          "start": "3600",
          "end": "3695"
        }
      ],
      "excludes": [
        {
          "start": "3920",
          "end": "3929"
        },
        {
          "start": "3930",
          "end": "3939"
        },
        {
          "start": "3950",
          "end": "3955"
        },
        "8005"
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "3955",
      "formatString": "N4+N6",
      "description": "Amount Payable per unit of measure single monetary area (variable measure trade item)",
      "regex": "(\\d{6})",
      "note": "\"The fourth digit of this AI indicates the number of decimal places. For example if the fourth digit is 3 the decimal is in the 3rd position (nnn.nnn), if the fourth digit is 1 the decimal is in the 1st position (nnnnn.n). See GS1 General Specifications for full details.\"",
      "start": "3950",
      "end": "3955",
      "title": "PRICE/UoM",
      "separatorRequired": true,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "30",
        {
          "start": "3100",
          "end": "3195"
        },
        {
          "start": "3200",
          "end": "3295"
        },
        {
          "start": "3500",
          "end": "3595"
        },
        {
          "start": "3600",
          "end": "3695"
        }
      ],
      "excludes": [
        {
          "start": "3920",
          "end": "3929"
        },
        {
          "start": "3930",
          "end": "3939"
        },
        {
          "start": "3950",
          "end": "3955"
        },
        "8005"
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "400",
      "formatString": "N3+X..30",
      "description": "Customers purchase order number",
      "regex": "([!%-?A-Z_a-z\\x22]{1,30})",
      "note": "",
      "title": "ORDER NUMBER",
      "separatorRequired": true,
      "components": [
        {
          "optional": false,
          "type": "X",
          "fixedLength": false,
          "length": 30
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "401",
      "formatString": "N3+X..30",
      "description": "Global Identification Number for Consignment (GINC)",
      "regex": "([!%-?A-Z_a-z\\x22]{1,30})",
      "note": "",
      "title": "GINC",
      "separatorRequired": true,
      "components": [
        {
          "optional": false,
          "type": "X",
          "fixedLength": false,
          "length": 30,
          "key": true
        }
      ],
      "gs1DigitalLinkPrimaryKey": true,
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "402",
      "formatString": "N3+N17",
      "description": "Global Shipment Identification Number (GSIN)",
      "regex": "(\\d{17})",
      "note": "",
      "title": "GSIN",
      "separatorRequired": true,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 17,
          "checkDigit": true,
          "key": true
        }
      ],
      "gs1DigitalLinkPrimaryKey": true,
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "403",
      "formatString": "N3+X..30",
      "description": "Routing code",
      "regex": "([!%-?A-Z_a-z\\x22]{1,30})",
      "note": "",
      "title": "ROUTE",
      "separatorRequired": true,
      "components": [
        {
          "optional": false,
          "type": "X",
          "fixedLength": false,
          "length": 30
        }
      ],
      "requires": [
        "00"
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "410",
      "formatString": "N3+N13",
      "description": "Ship to / Deliver to Global Location Number (GLN)",
      "regex": "(\\d{13})",
      "note": "",
      "title": "SHIP TO LOC",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 13,
          "checkDigit": true,
          "key": true
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "411",
      "formatString": "N3+N13",
      "description": "Bill to / Invoice to Global Location Number (GLN)",
      "regex": "(\\d{13})",
      "note": "",
      "title": "BILL TO",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 13,
          "checkDigit": true,
          "key": true
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "412",
      "formatString": "N3+N13",
      "description": "Purchased from Global Location Number (GLN)",
      "regex": "(\\d{13})",
      "note": "",
      "title": "PURCHASE FROM",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 13,
          "checkDigit": true,
          "key": true
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "413",
      "formatString": "N3+N13",
      "description": "Ship for / Deliver for - Forward to Global Location Number (GLN)",
      "regex": "(\\d{13})",
      "note": "",
      "title": "SHIP FOR LOC",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 13,
          "checkDigit": true,
          "key": true
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "414",
      "formatString": "N3+N13",
      "description": "Identification of a physical location - Global Location Number (GLN)",
      "regex": "(\\d{13})",
      "note": "",
      "title": "LOC No.",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 13,
          "checkDigit": true,
          "key": true
        }
      ],
      "gs1DigitalLinkPrimaryKey": true,
      "gs1DigitalLinkQualifiers": [
        [
          "254"
        ],
        [
          "7040"
        ]
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "415",
      "formatString": "N3+N13",
      "description": "Global Location Number (GLN) of the invoicing party",
      "regex": "(\\d{13})",
      "note": "",
      "title": "PAY TO",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 13,
          "checkDigit": true,
          "key": true
        }
      ],
      "gs1DigitalLinkPrimaryKey": true,
      "gs1DigitalLinkQualifiers": [
        [
          "8020"
        ]
      ],
      "requires": [
        "8020"
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "416",
      "formatString": "N3+N13",
      "description": "Global Location Number (GLN) of the production or service location",
      "regex": "(\\d{13})",
      "note": "",
      "title": "PROD/SERV LOC",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 13,
          "checkDigit": true,
          "key": true
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "417",
      "formatString": "N3+N13",
      "description": "Party Global Location Number (GLN)",
      "regex": "(\\d{13})",
      "note": "",
      "title": "PARTY",
      "separatorRequired": false,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 13,
          "checkDigit": true,
          "key": true
        }
      ],
      "gs1DigitalLinkPrimaryKey": true,
      "gs1DigitalLinkQualifiers": [
        [
          "7040"
        ]
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "420",
      "formatString": "N3+X..20",
      "description": "Ship to / Deliver to postal code within a single postal authority",
      "regex": "([!%-?A-Z_a-z\\x22]{1,20})",
      "note": "",
      "title": "SHIP TO POST",
      "separatorRequired": true,
      "components": [
        {
          "optional": false,
          "type": "X",
          "fixedLength": false,
          "length": 20
        }
      ],
      "excludes": [
        "421"
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "421",
      "formatString": "N3+N3+X..9",
      "description": "Ship to / Deliver to postal code with ISO country code",
      "regex": "(\\d{3})([!%-?A-Z_a-z\\x22]{1,9})",
      "note": "",
      "title": "SHIP TO POST",
      "separatorRequired": true,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 3,
          "format": "iso3166"
        },
        {
          "optional": false,
          "type": "X",
          "fixedLength": false,
          "length": 9
        }
      ],
      "excludes": [
        "4307"
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "422",
      "formatString": "N3+N3",
      "description": "Country of origin of a trade item",
      "regex": "(\\d{3})",
      "note": "",
      "title": "ORIGIN",
      "separatorRequired": true,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 3,
          "format": "iso3166"
        }
      ],
      "requires": [
        "01",
        "02",
        "8006",
        "8026"
      ],
      "excludes": [
        "426"
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "423",
      "formatString": "N3+N3+N..12",
      "description": "Country of initial processing",
      "regex": "((?:\\d{3}){1,5})",
      "note": "",
      "title": "COUNTRY - INITIAL PROCESS",
      "separatorRequired": true,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": false,
          "length": 15,
          "format": "iso3166list"
        }
      ],
      "requires": [
        "01",
        "02"
      ],
      "excludes": [
        "426"
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "424",
      "formatString": "N3+N3",
      "description": "Country of processing",
      "regex": "(\\d{3})",
      "note": "",
      "title": "COUNTRY - PROCESS",
      "separatorRequired": true,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 3,
          "format": "iso3166"
        }
      ],
      "requires": [
        "01",
        "02"
      ],
      "excludes": [
        "426"
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "425",
      "formatString": "N3+N3+N..12",
      "description": "Country of disassembly",
      "regex": "((?:\\d{3}){1,5})",
      "note": "",
      "title": "COUNTRY - DISASSEMBLY",
      "separatorRequired": true,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": false,
          "length": 15,
          "format": "iso3166list"
        }
      ],
      "requires": [
        "01",
        "02"
      ],
      "excludes": [
        "426"
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "426",
      "formatString": "N3+N3",
      "description": "Country covering full process chain",
      "regex": "(\\d{3})",
      "note": "",
      "title": "COUNTRY - FULL PROCESS",
      "separatorRequired": true,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 3,
          "format": "iso3166"
        }
      ],
      "requires": [
        "01",
        "02"
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "427",
      "formatString": "N3+X..3",
      "description": "Country subdivision Of origin",
      "regex": "([!%-?A-Z_a-z\\x22]{1,3})",
      "note": "",
      "title": "ORIGIN SUBDIVISION",
      "separatorRequired": true,
      "components": [
        {
          "optional": false,
          "type": "X",
          "fixedLength": false,
          "length": 3
        }
      ],
      "requires": [
        [
          "422",
          "01"
        ],
        [
          "422",
          "02"
        ]
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "4300",
      "formatString": "N4+X..35",
      "description": "Ship-to / Deliver-to company name",
      "regex": "((?:[!%-?A-Z_a-z\\x22]|%[0-9A-Fa-f][0-9A-Fa-f]%[0-9A-Fa-f][0-9A-Fa-f]){1,35})",
      "note": "",
      "title": "SHIP TO COMP",
      "separatorRequired": true,
      "components": [
        {
          "optional": false,
          "type": "X",
          "fixedLength": false,
          "length": 35,
          "format": "pcenc"
        }
      ],
      "requires": [
        "00"
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "4301",
      "formatString": "N4+X..35",
      "description": "Ship-to / Deliver-to contact",
      "regex": "((?:[!%-?A-Z_a-z\\x22]|%[0-9A-Fa-f][0-9A-Fa-f]%[0-9A-Fa-f][0-9A-Fa-f]){1,35})",
      "note": "",
      "title": "SHIP TO NAME",
      "separatorRequired": true,
      "components": [
        {
          "optional": false,
          "type": "X",
          "fixedLength": false,
          "length": 35,
          "format": "pcenc"
        }
      ],
      "requires": [
        "00"
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "4302",
      "formatString": "N4+X..70",
      "description": "Ship-to / Deliver-to address line 1",
      "regex": "((?:[!%-?A-Z_a-z\\x22]|%[0-9A-Fa-f][0-9A-Fa-f]%[0-9A-Fa-f][0-9A-Fa-f]){1,70})",
      "note": "",
      "title": "SHIP TO ADD1",
      "separatorRequired": true,
      "components": [
        {
          "optional": false,
          "type": "X",
          "fixedLength": false,
          "length": 70,
          "format": "pcenc"
        }
      ],
      "requires": [
        "00"
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "4303",
      "formatString": "N4+X..70",
      "description": "Ship-to / Deliver-to address line 2",
      "regex": "((?:[!%-?A-Z_a-z\\x22]|%[0-9A-Fa-f][0-9A-Fa-f]%[0-9A-Fa-f][0-9A-Fa-f]){1,70})",
      "note": "",
      "title": "SHIP TO ADD2",
      "separatorRequired": true,
      "components": [
        {
          "optional": false,
          "type": "X",
          "fixedLength": false,
          "length": 70,
          "format": "pcenc"
        }
      ],
      "requires": [
        [
          "4302",
          "00"
        ]
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "4304",
      "formatString": "N4+X..70",
      "description": "Ship-to / Deliver-to suburb",
      "regex": "((?:[!%-?A-Z_a-z\\x22]|%[0-9A-Fa-f][0-9A-Fa-f]%[0-9A-Fa-f][0-9A-Fa-f]){1,70})",
      "note": "",
      "title": "SHIP TO SUB",
      "separatorRequired": true,
      "components": [
        {
          "optional": false,
          "type": "X",
          "fixedLength": false,
          "length": 70,
          "format": "pcenc"
        }
      ],
      "requires": [
        "00"
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "4305",
      "formatString": "N4+X..70",
      "description": "Ship-to / Deliver-to locality",
      "regex": "((?:[!%-?A-Z_a-z\\x22]|%[0-9A-Fa-f][0-9A-Fa-f]%[0-9A-Fa-f][0-9A-Fa-f]){1,70})",
      "note": "",
      "title": "SHIP TO LOC",
      "separatorRequired": true,
      "components": [
        {
          "optional": false,
          "type": "X",
          "fixedLength": false,
          "length": 70,
          "format": "pcenc"
        }
      ],
      "requires": [
        "00"
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "4306",
      "formatString": "N4+X..70",
      "description": "Ship-to / Deliver-to region",
      "regex": "((?:[!%-?A-Z_a-z\\x22]|%[0-9A-Fa-f][0-9A-Fa-f]%[0-9A-Fa-f][0-9A-Fa-f]){1,70})",
      "note": "",
      "title": "SHIP TO REG",
      "separatorRequired": true,
      "components": [
        {
          "optional": false,
          "type": "X",
          "fixedLength": false,
          "length": 70,
          "format": "pcenc"
        }
      ],
      "requires": [
        "00"
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "4307",
      "formatString": "N4+X2",
      "description": "Ship-to / Deliver-to country code",
      "regex": "([A-Z0-9]{2})",
      "note": "",
      "title": "SHIP TO COUNTRY",
      "separatorRequired": true,
      "components": [
        {
          "optional": false,
          "type": "X",
          "fixedLength": true,
          "length": 2,
          "format": "iso3166alpha2"
        }
      ],
      "requires": [
        "00"
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "4308",
      "formatString": "N4+X..30",
      "description": "Ship-to / Deliver-to telephone number",
      "regex": "([!%-?A-Z_a-z\\x22]{1,30})",
      "note": "",
      "title": "SHIP TO PHONE",
      "separatorRequired": true,
      "components": [
        {
          "optional": false,
          "type": "X",
          "fixedLength": false,
          "length": 30
        }
      ],
      "requires": [
        "00"
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "4309",
      "formatString": "N4+N20",
      "description": "Ship-to / Deliver-to GEO location",
      "regex": "(\\d{20})",
      "note": "",
      "title": "SHIP TO GEO",
      "separatorRequired": true,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 20,
          "format": "latlong"
        }
      ],
      "requires": [
        "00"
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "4310",
      "formatString": "N4+X..35",
      "description": "Return-to company name",
      "regex": "((?:[!%-?A-Z_a-z\\x22]|%[0-9A-Fa-f][0-9A-Fa-f]%[0-9A-Fa-f][0-9A-Fa-f]){1,35})",
      "note": "",
      "title": "RTN TO COMP",
      "separatorRequired": true,
      "components": [
        {
          "optional": false,
          "type": "X",
          "fixedLength": false,
          "length": 35,
          "format": "pcenc"
        }
      ],
      "requires": [
        "00"
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "4311",
      "formatString": "N4+X..35",
      "description": "Return-to contact",
      "regex": "((?:[!%-?A-Z_a-z\\x22]|%[0-9A-Fa-f][0-9A-Fa-f]%[0-9A-Fa-f][0-9A-Fa-f]){1,35})",
      "note": "",
      "title": "RTN TO NAME",
      "separatorRequired": true,
      "components": [
        {
          "optional": false,
          "type": "X",
          "fixedLength": false,
          "length": 35,
          "format": "pcenc"
        }
      ],
      "requires": [
        "00"
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "4312",
      "formatString": "N4+X..70",
      "description": "Return-to address line 1",
      "regex": "((?:[!%-?A-Z_a-z\\x22]|%[0-9A-Fa-f][0-9A-Fa-f]%[0-9A-Fa-f][0-9A-Fa-f]){1,70})",
      "note": "",
      "title": "RTN TO ADD1",
      "separatorRequired": true,
      "components": [
        {
          "optional": false,
          "type": "X",
          "fixedLength": false,
          "length": 70,
          "format": "pcenc"
        }
      ],
      "requires": [
        "00"
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "4313",
      "formatString": "N4+X..70",
      "description": "Return-to address line 2",
      "regex": "((?:[!%-?A-Z_a-z\\x22]|%[0-9A-Fa-f][0-9A-Fa-f]%[0-9A-Fa-f][0-9A-Fa-f]){1,70})",
      "note": "",
      "title": "RTN TO ADD2",
      "separatorRequired": true,
      "components": [
        {
          "optional": false,
          "type": "X",
          "fixedLength": false,
          "length": 70,
          "format": "pcenc"
        }
      ],
      "requires": [
        [
          "4312",
          "00"
        ]
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "4314",
      "formatString": "N4+X..70",
      "description": "Return-to suburb",
      "regex": "((?:[!%-?A-Z_a-z\\x22]|%[0-9A-Fa-f][0-9A-Fa-f]%[0-9A-Fa-f][0-9A-Fa-f]){1,70})",
      "note": "",
      "title": "RTN TO SUB",
      "separatorRequired": true,
      "components": [
        {
          "optional": false,
          "type": "X",
          "fixedLength": false,
          "length": 70,
          "format": "pcenc"
        }
      ],
      "requires": [
        "00"
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "4315",
      "formatString": "N4+X..70",
      "description": "Return-to locality",
      "regex": "((?:[!%-?A-Z_a-z\\x22]|%[0-9A-Fa-f][0-9A-Fa-f]%[0-9A-Fa-f][0-9A-Fa-f]){1,70})",
      "note": "",
      "title": "RTN TO LOC",
      "separatorRequired": true,
      "components": [
        {
          "optional": false,
          "type": "X",
          "fixedLength": false,
          "length": 70,
          "format": "pcenc"
        }
      ],
      "requires": [
        "00"
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "4316",
      "formatString": "N4+X..70",
      "description": "Return-to region",
      "regex": "((?:[!%-?A-Z_a-z\\x22]|%[0-9A-Fa-f][0-9A-Fa-f]%[0-9A-Fa-f][0-9A-Fa-f]){1,70})",
      "note": "",
      "title": "RTN TO REG",
      "separatorRequired": true,
      "components": [
        {
          "optional": false,
          "type": "X",
          "fixedLength": false,
          "length": 70,
          "format": "pcenc"
        }
      ],
      "requires": [
        "00"
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "4317",
      "formatString": "N4+X2",
      "description": "Return-to country code",
      "regex": "([A-Z0-9]{2})",
      "note": "",
      "title": "RTN TO COUNTRY",
      "separatorRequired": true,
      "components": [
        {
          "optional": false,
          "type": "X",
          "fixedLength": true,
          "length": 2,
          "format": "iso3166alpha2"
        }
      ],
      "requires": [
        "00"
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "4318",
      "formatString": "N4+X..20",
      "description": "Return-to postal code",
      "regex": "([!%-?A-Z_a-z\\x22]{1,20})",
      "note": "",
      "title": "RTN TO POST",
      "separatorRequired": true,
      "components": [
        {
          "optional": false,
          "type": "X",
          "fixedLength": false,
          "length": 20
        }
      ],
      "requires": [
        "00"
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "4319",
      "formatString": "N4+X..30",
      "description": "Return-to telephone number",
      "regex": "([!%-?A-Z_a-z\\x22]{1,30})",
      "note": "",
      "title": "RTN TO PHONE",
      "separatorRequired": true,
      "components": [
        {
          "optional": false,
          "type": "X",
          "fixedLength": false,
          "length": 30
        }
      ],
      "requires": [
        "00"
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "4320",
      "formatString": "N4+X..35",
      "description": "Service code description",
      "regex": "((?:[!%-?A-Z_a-z\\x22]|%[0-9A-Fa-f][0-9A-Fa-f]%[0-9A-Fa-f][0-9A-Fa-f]){1,35})",
      "note": "",
      "title": "SRV DESCRIPTION",
      "separatorRequired": true,
      "components": [
        {
          "optional": false,
          "type": "X",
          "fixedLength": false,
          "length": 35,
          "format": "pcenc"
        }
      ],
      "requires": [
        "00"
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "4321",
      "formatString": "N4+N1",
      "description": "Dangerous goods flag",
      "regex": "([01])",
      "note": "",
      "title": "DANGEROUS GOODS",
      "separatorRequired": true,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 1,
          "format": "yesno"
        }
      ],
      "requires": [
        "00"
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "4322",
      "formatString": "N4+N1",
      "description": "Authority to leave",
      "regex": "([01])",
      "note": "",
      "title": "AUTH LEAVE",
      "separatorRequired": true,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 1,
          "format": "yesno"
        }
      ],
      "requires": [
        "00"
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "4323",
      "formatString": "N4+N1",
      "description": "Signature required flag",
      "regex": "([01])",
      "note": "",
      "title": "SIG REQUIRED",
      "separatorRequired": true,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 1,
          "format": "yesno"
        }
      ],
      "requires": [
        "00"
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "4324",
      "formatString": "N4+N10",
      "description": "Not before delivery date time (YYMMDDhhmm)",
      "regex": "(\\d{10})",
      "note": "",
      "title": "NBEF DEL DT",
      "separatorRequired": true,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6,
          "format": "yymmd0"
        },
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 4,
          "format": "hhmm"
        }
      ],
      "requires": [
        "00"
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "4325",
      "formatString": "N4+N10",
      "description": "Not after delivery date time (YYMMDDhhmm)",
      "regex": "(\\d{10})",
      "note": "",
      "title": "NAFT DEL DT",
      "separatorRequired": true,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6,
          "format": "yymmd0"
        },
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 4,
          "format": "hhmm"
        }
      ],
      "requires": [
        "00"
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "4326",
      "formatString": "N4+N6",
      "description": "Release date (YYMMDD)",
      "regex": "(\\d{6})",
      "note": "",
      "title": "REL DATE",
      "separatorRequired": true,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6,
          "format": "yymmdd"
        }
      ],
      "requires": [
        "00"
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "4330",
      "formatString": "N4+N6+[-]",
      "description": "Maximum temperature in Fahrenheit (expressed in hundredths of degrees)",
      "regex": "(\\d{6}[-]?)",
      "note": "",
      "title": "MAX TEMP F",
      "separatorRequired": true,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        },
        {
          "optional": true,
          "type": "X",
          "fixedLength": true,
          "length": 1
        }
      ],
      "requires": [
        "00"
      ],
      "excludes": [
        "4331"
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "4331",
      "formatString": "N4+N6+[-]",
      "description": "Maximum temperature in Celsius (expressed in hundredths of degrees)",
      "regex": "(\\d{6}[-]?)",
      "note": "",
      "title": "MAX TEMP C",
      "separatorRequired": true,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        },
        {
          "optional": true,
          "type": "X",
          "fixedLength": true,
          "length": 1
        }
      ],
      "requires": [
        "00"
      ],
      "excludes": [
        "4330"
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "4332",
      "formatString": "N4+N6+[-]",
      "description": "Minimum temperature in Fahrenheit (expressed in hundredths of degrees)",
      "regex": "(\\d{6}[-]?)",
      "note": "",
      "title": "MIN TEMP F",
      "separatorRequired": true,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        },
        {
          "optional": true,
          "type": "X",
          "fixedLength": true,
          "length": 1
        }
      ],
      "requires": [
        "00"
      ],
      "excludes": [
        "4333"
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "4333",
      "formatString": "N4+N6+[-]",
      "description": "Minimum temperature in Celsius (expressed in hundredths of degrees)",
      "regex": "(\\d{6}[-]?)",
      "note": "",
      "title": "MIN TEMP C",
      "separatorRequired": true,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        },
        {
          "optional": true,
          "type": "X",
          "fixedLength": true,
          "length": 1
        }
      ],
      "requires": [
        "00"
      ],
      "excludes": [
        "4332"
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "7001",
      "formatString": "N4+N13",
      "description": "NATO Stock Number (NSN)",
      "regex": "(\\d{13})",
      "note": "AIs issued in the 7 series represent a special case because they are restricted to: one or a small number of sectors (i.e. are not multi-sectoral); or a country or a region (i.e. are not global).",
      "title": "NSN",
      "separatorRequired": true,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 13
        }
      ],
      "requires": [
        "01",
        "02",
        "8006",
        "8026"
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "7002",
      "formatString": "N4+X..30",
      "description": "UN/ECE meat carcasses and cuts classification",
      "regex": "([!%-?A-Z_a-z\\x22]{1,30})",
      "note": "AIs issued in the 7 series represent a special case because they are restricted to: one or a small number of sectors (i.e. are not multi-sectoral); or a country or a region (i.e. are not global).",
      "title": "MEAT CUT",
      "separatorRequired": true,
      "components": [
        {
          "optional": false,
          "type": "X",
          "fixedLength": false,
          "length": 30
        }
      ],
      "requires": [
        "01",
        "02"
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "7003",
      "formatString": "N4+N10",
      "description": "Expiration date and time (YYMMDDhhmm)",
      "regex": "(\\d{10})",
      "note": "AIs issued in the 7 series represent a special case because they are restricted to: one or a small number of sectors (i.e. are not multi-sectoral); or a country or a region (i.e. are not global).",
      "title": "EXPIRY TIME",
      "separatorRequired": true,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6,
          "format": "yymmdd"
        },
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 4,
          "format": "hhmm"
        }
      ],
      "requires": [
        "01",
        "02"
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "7004",
      "formatString": "N4+N..4",
      "description": "Active potency",
      "regex": "(\\d{0,4})",
      "note": "AIs issued in the 7 series represent a special case because they are restricted to: one or a small number of sectors (i.e. are not multi-sectoral); or a country or a region (i.e. are not global).",
      "title": "ACTIVE POTENCY",
      "separatorRequired": true,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": false,
          "length": 4
        }
      ],
      "requires": [
        [
          "01",
          "10"
        ]
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "7005",
      "formatString": "N4+X..12",
      "description": "Catch area",
      "regex": "([!%-?A-Z_a-z\\x22]{1,12})",
      "note": "AIs issued in the 7 series represent a special case because they are restricted to: one or a small number of sectors (i.e. are not multi-sectoral); or a country or a region (i.e. are not global).",
      "title": "CATCH AREA",
      "separatorRequired": true,
      "components": [
        {
          "optional": false,
          "type": "X",
          "fixedLength": false,
          "length": 12
        }
      ],
      "requires": [
        "01",
        "02"
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "7006",
      "formatString": "N4+N6",
      "description": "First freeze date (YYMMDD)",
      "regex": "(\\d{6})",
      "note": "AIs issued in the 7 series represent a special case because they are restricted to: one or a small number of sectors (i.e. are not multi-sectoral); or a country or a region (i.e. are not global).",
      "title": "FIRST FREEZE DATE",
      "separatorRequired": true,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6,
          "format": "yymmdd"
        }
      ],
      "requires": [
        "01",
        "02"
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "7007",
      "formatString": "N4+N6[+N6]",
      "description": "Harvest date (YYMMDD[YYMMDD])",
      "regex": "(\\d{6})(\\d{6})?",
      "note": "AIs issued in the 7 series represent a special case because they are restricted to: one or a small number of sectors (i.e. are not multi-sectoral); or a country or a region (i.e. are not global).",
      "title": "HARVEST DATE",
      "separatorRequired": true,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6,
          "format": "yymmdd"
        },
        {
          "optional": true,
          "type": "N",
          "fixedLength": true,
          "length": 6,
          "format": "yymmdd"
        }
      ],
      "requires": [
        "01",
        "02"
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "7008",
      "formatString": "N4+X..3",
      "description": "Species for fishery purposes",
      "regex": "([!%-?A-Z_a-z\\x22]{1,3})",
      "note": "AIs issued in the 7 series represent a special case because they are restricted to: one or a small number of sectors (i.e. are not multi-sectoral); or a country or a region (i.e. are not global).",
      "title": "AQUATIC SPECIES",
      "separatorRequired": true,
      "components": [
        {
          "optional": false,
          "type": "X",
          "fixedLength": false,
          "length": 3
        }
      ],
      "requires": [
        "01",
        "02"
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "7009",
      "formatString": "N4+X..10",
      "description": "Fishing gear type",
      "regex": "([!%-?A-Z_a-z\\x22]{1,10})",
      "note": "AIs issued in the 7 series represent a special case because they are restricted to: one or a small number of sectors (i.e. are not multi-sectoral); or a country or a region (i.e. are not global).",
      "title": "FISHING GEAR TYPE",
      "separatorRequired": true,
      "components": [
        {
          "optional": false,
          "type": "X",
          "fixedLength": false,
          "length": 10
        }
      ],
      "requires": [
        "01",
        "02"
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "7010",
      "formatString": "N4+X..2",
      "description": "Production method",
      "regex": "([!%-?A-Z_a-z\\x22]{1,2})",
      "note": "AIs issued in the 7 series represent a special case because they are restricted to: one or a small number of sectors (i.e. are not multi-sectoral); or a country or a region (i.e. are not global).",
      "title": "PROD METHOD",
      "separatorRequired": true,
      "components": [
        {
          "optional": false,
          "type": "X",
          "fixedLength": false,
          "length": 2
        }
      ],
      "requires": [
        "01",
        "02"
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "7011",
      "formatString": "N4+N6[+N4]",
      "description": "Test by date (YYMMDD[hhmm])",
      "regex": "(\\d{6})(\\d{4})?",
      "note": "AIs issued in the 7 series represent a special case because they are restricted to: one or a small number of sectors (i.e. are not multi-sectoral); or a country or a region (i.e. are not global).",
      "title": "TEST BY DATE",
      "separatorRequired": true,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6,
          "format": "yymmdd"
        },
        {
          "optional": true,
          "type": "N",
          "fixedLength": true,
          "length": 4,
          "format": "hhmm"
        }
      ],
      "requires": [
        "01",
        "02"
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "7020",
      "formatString": "N4+X..20",
      "description": "Refurbishment lot ID",
      "regex": "([!%-?A-Z_a-z\\x22]{1,20})",
      "note": "AIs issued in the 7 series represent a special case because they are restricted to: one or a small number of sectors (i.e. are not multi-sectoral); or a country or a region (i.e. are not global).",
      "title": "REFURB LOT",
      "separatorRequired": true,
      "components": [
        {
          "optional": false,
          "type": "X",
          "fixedLength": false,
          "length": 20
        }
      ],
      "requires": [
        [
          "416",
          "01"
        ],
        [
          "416",
          "8006"
        ]
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "7021",
      "formatString": "N4+X..20",
      "description": "Functional status",
      "regex": "([!%-?A-Z_a-z\\x22]{1,20})",
      "note": "AIs issued in the 7 series represent a special case because they are restricted to: one or a small number of sectors (i.e. are not multi-sectoral); or a country or a region (i.e. are not global).",
      "title": "FUNC STAT",
      "separatorRequired": true,
      "components": [
        {
          "optional": false,
          "type": "X",
          "fixedLength": false,
          "length": 20
        }
      ],
      "requires": [
        "01",
        "8006"
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "7022",
      "formatString": "N4+X..20",
      "description": "Revision status",
      "regex": "([!%-?A-Z_a-z\\x22]{1,20})",
      "note": "AIs issued in the 7 series represent a special case because they are restricted to: one or a small number of sectors (i.e. are not multi-sectoral); or a country or a region (i.e. are not global).",
      "title": "REV STAT",
      "separatorRequired": true,
      "components": [
        {
          "optional": false,
          "type": "X",
          "fixedLength": false,
          "length": 20
        }
      ],
      "requires": [
        [
          "7021",
          "01"
        ],
        [
          "7021",
          "8006"
        ]
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "7023",
      "formatString": "N4+X..30",
      "description": "Global Individual Asset Identifier (GIAI) of an assembly",
      "regex": "([!%-?A-Z_a-z\\x22]{1,30})",
      "note": "AIs issued in the 7 series represent a special case because they are restricted to: one or a small number of sectors (i.e. are not multi-sectoral); or a country or a region (i.e. are not global).",
      "title": "GIAI - ASSEMBLY",
      "separatorRequired": true,
      "components": [
        {
          "optional": false,
          "type": "X",
          "fixedLength": false,
          "length": 30,
          "key": true
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "7030",
      "formatString": "N3+X..27",
      "description": "Number of processor with three-digit ISO country code",
      "regex": "(\\d{3})([!%-?A-Z_a-z\\x22]{1,27})",
      "note": "The fourth digit of this GS1 Application Identifier indicates the sequence number, allowing for multiple occurrences of the AI.",
      "start": "7030",
      "end": "7039",
      "title": "PROCESSOR # 0",
      "separatorRequired": true,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 3
        },
        {
          "optional": false,
          "type": "X",
          "fixedLength": false,
          "length": 27
        }
      ],
      "requires": [
        "01",
        "02"
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "7031",
      "formatString": "N3+X..27",
      "description": "Number of processor with three-digit ISO country code",
      "regex": "(\\d{3})([!%-?A-Z_a-z\\x22]{1,27})",
      "note": "The fourth digit of this GS1 Application Identifier indicates the sequence number, allowing for multiple occurrences of the AI.",
      "start": "7030",
      "end": "7039",
      "title": "PROCESSOR # 1",
      "separatorRequired": true,
      "components": [
        {
          "optional": false,
          "type": "X",
          "fixedLength": true,
          "length": 3
        },
        {
          "optional": false,
          "type": "X",
          "fixedLength": false,
          "length": 27
        }
      ],
      "requires": [
        "01",
        "02"
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "7032",
      "formatString": "N3+X..27",
      "description": "Number of processor with three-digit ISO country code",
      "regex": "(\\d{3})([!%-?A-Z_a-z\\x22]{1,27})",
      "note": "The fourth digit of this GS1 Application Identifier indicates the sequence number, allowing for multiple occurrences of the AI.",
      "start": "7030",
      "end": "7039",
      "title": "PROCESSOR # 2",
      "separatorRequired": true,
      "components": [
        {
          "optional": false,
          "type": "X",
          "fixedLength": true,
          "length": 3
        },
        {
          "optional": false,
          "type": "X",
          "fixedLength": false,
          "length": 27
        }
      ],
      "requires": [
        "01",
        "02"
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "7033",
      "formatString": "N3+X..27",
      "description": "Number of processor with three-digit ISO country code",
      "regex": "(\\d{3})([!%-?A-Z_a-z\\x22]{1,27})",
      "note": "The fourth digit of this GS1 Application Identifier indicates the sequence number, allowing for multiple occurrences of the AI.",
      "start": "7030",
      "end": "7039",
      "title": "PROCESSOR # 3",
      "separatorRequired": true,
      "components": [
        {
          "optional": false,
          "type": "X",
          "fixedLength": true,
          "length": 3
        },
        {
          "optional": false,
          "type": "X",
          "fixedLength": false,
          "length": 27
        }
      ],
      "requires": [
        "01",
        "02"
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "7034",
      "formatString": "N3+X..27",
      "description": "Number of processor with three-digit ISO country code",
      "regex": "(\\d{3})([!%-?A-Z_a-z\\x22]{1,27})",
      "note": "The fourth digit of this GS1 Application Identifier indicates the sequence number, allowing for multiple occurrences of the AI.",
      "start": "7030",
      "end": "7039",
      "title": "PROCESSOR # 4",
      "separatorRequired": true,
      "components": [
        {
          "optional": false,
          "type": "X",
          "fixedLength": true,
          "length": 3
        },
        {
          "optional": false,
          "type": "X",
          "fixedLength": false,
          "length": 27
        }
      ],
      "requires": [
        "01",
        "02"
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "7035",
      "formatString": "N3+X..27",
      "description": "Number of processor with three-digit ISO country code",
      "regex": "(\\d{3})([!%-?A-Z_a-z\\x22]{1,27})",
      "note": "The fourth digit of this GS1 Application Identifier indicates the sequence number, allowing for multiple occurrences of the AI.",
      "start": "7030",
      "end": "7039",
      "title": "PROCESSOR # 5",
      "separatorRequired": true,
      "components": [
        {
          "optional": false,
          "type": "X",
          "fixedLength": true,
          "length": 3
        },
        {
          "optional": false,
          "type": "X",
          "fixedLength": false,
          "length": 27
        }
      ],
      "requires": [
        "01",
        "02"
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "7036",
      "formatString": "N3+X..27",
      "description": "Number of processor with three-digit ISO country code",
      "regex": "(\\d{3})([!%-?A-Z_a-z\\x22]{1,27})",
      "note": "The fourth digit of this GS1 Application Identifier indicates the sequence number, allowing for multiple occurrences of the AI.",
      "start": "7030",
      "end": "7039",
      "title": "PROCESSOR # 6",
      "separatorRequired": true,
      "components": [
        {
          "optional": false,
          "type": "X",
          "fixedLength": true,
          "length": 3
        },
        {
          "optional": false,
          "type": "X",
          "fixedLength": false,
          "length": 27
        }
      ],
      "requires": [
        "01",
        "02"
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "7037",
      "formatString": "N3+X..27",
      "description": "Number of processor with three-digit ISO country code",
      "regex": "(\\d{3})([!%-?A-Z_a-z\\x22]{1,27})",
      "note": "The fourth digit of this GS1 Application Identifier indicates the sequence number, allowing for multiple occurrences of the AI.",
      "start": "7030",
      "end": "7039",
      "title": "PROCESSOR # 7",
      "separatorRequired": true,
      "components": [
        {
          "optional": false,
          "type": "X",
          "fixedLength": true,
          "length": 3
        },
        {
          "optional": false,
          "type": "X",
          "fixedLength": false,
          "length": 27
        }
      ],
      "requires": [
        "01",
        "02"
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "7038",
      "formatString": "N3+X..27",
      "description": "Number of processor with three-digit ISO country code",
      "regex": "(\\d{3})([!%-?A-Z_a-z\\x22]{1,27})",
      "note": "The fourth digit of this GS1 Application Identifier indicates the sequence number, allowing for multiple occurrences of the AI.",
      "start": "7030",
      "end": "7039",
      "title": "PROCESSOR # 8",
      "separatorRequired": true,
      "components": [
        {
          "optional": false,
          "type": "X",
          "fixedLength": true,
          "length": 3
        },
        {
          "optional": false,
          "type": "X",
          "fixedLength": false,
          "length": 27
        }
      ],
      "requires": [
        "01",
        "02"
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "7039",
      "formatString": "N3+X..27",
      "description": "Number of processor with three-digit ISO country code",
      "regex": "(\\d{3})([!%-?A-Z_a-z\\x22]{1,27})",
      "note": "The fourth digit of this GS1 Application Identifier indicates the sequence number, allowing for multiple occurrences of the AI.",
      "start": "7030",
      "end": "7039",
      "title": "PROCESSOR # 9",
      "separatorRequired": true,
      "components": [
        {
          "optional": false,
          "type": "X",
          "fixedLength": true,
          "length": 3
        },
        {
          "optional": false,
          "type": "X",
          "fixedLength": false,
          "length": 27
        }
      ],
      "requires": [
        "01",
        "02"
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "7040",
      "formatString": "N4+N1+X3",
      "description": "GS1 UIC with Extension 1 and Importer index",
      "regex": "(\\d)([!%-?A-Z_a-z\\x22])([!%-?A-Z_a-z\\x22])([!%-?A-Z_a-z\\x22])",
      "note": "AIs issued in the 7 series represent a special case because they are restricted to: one or a small number of sectors (i.e. are not multi-sectoral); or a country or a region (i.e. are not global).",
      "title": "UIC+EXT",
      "separatorRequired": true,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 1
        },
        {
          "optional": false,
          "type": "X",
          "fixedLength": true,
          "length": 1
        },
        {
          "optional": false,
          "type": "X",
          "fixedLength": true,
          "length": 1
        },
        {
          "optional": false,
          "type": "X",
          "fixedLength": true,
          "length": 1,
          "format": "importeridx"
        }
      ],
      "validAsDataAttribute": false
    },
    {
      "applicationIdentifier": "7041",
      "formatString": "N4+X..4",
      "description": "UN/CEFACT freight unit type",
      "regex": "([!%-?A-Z_a-z\\x22]{1,4})",
      "note": "AIs issued in the 7 series represent a special case because they are restricted to: one or a small number of sectors (i.e. are not multi-sectoral); or a country or a region (i.e. are not global).",
      "title": "UFRGT UNIT TYPE",
      "separatorRequired": true,
      "components": [
        {
          "optional": false,
          "type": "X",
          "fixedLength": false,
          "length": 4
        }
      ],
      "requires": [
        "00"
      ],
      "validAsDataAttribute": false
    },
    {
      "applicationIdentifier": "710",
      "formatString": "N3+X..20",
      "description": "National Healthcare Reimbursement Number (NHRN) - Germany PZN",
      "regex": "([!%-?A-Z_a-z\\x22]{1,20})",
      "note": "AIs issued in the 7 series represent a special case because they are restricted to: one or a small number of sectors (i.e. are not multi-sectoral); or a country or a region (i.e. are not global).",
      "title": "NHRN PZN",
      "separatorRequired": true,
      "components": [
        {
          "optional": false,
          "type": "X",
          "fixedLength": false,
          "length": 20
        }
      ],
      "requires": [
        "01"
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "711",
      "formatString": "N3+X..20",
      "description": "National Healthcare Reimbursement Number (NHRN) - France CIP",
      "regex": "([!%-?A-Z_a-z\\x22]{1,20})",
      "note": "AIs issued in the 7 series represent a special case because they are restricted to: one or a small number of sectors (i.e. are not multi-sectoral); or a country or a region (i.e. are not global).",
      "title": "NHRN CIP",
      "separatorRequired": true,
      "components": [
        {
          "optional": false,
          "type": "X",
          "fixedLength": false,
          "length": 20
        }
      ],
      "requires": [
        "01"
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "712",
      "formatString": "N3+X..20",
      "description": "National Healthcare Reimbursement Number (NHRN) - Spain CN",
      "regex": "([!%-?A-Z_a-z\\x22]{1,20})",
      "note": "AIs issued in the 7 series represent a special case because they are restricted to: one or a small number of sectors (i.e. are not multi-sectoral); or a country or a region (i.e. are not global).",
      "title": "NHRN CN",
      "separatorRequired": true,
      "components": [
        {
          "optional": false,
          "type": "X",
          "fixedLength": false,
          "length": 20
        }
      ],
      "requires": [
        "01"
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "713",
      "formatString": "N3+X..20",
      "description": "National Healthcare Reimbursement Number (NHRN) - Brasil DRN",
      "regex": "([!%-?A-Z_a-z\\x22]{1,20})",
      "note": "AIs issued in the 7 series represent a special case because they are restricted to: one or a small number of sectors (i.e. are not multi-sectoral); or a country or a region (i.e. are not global).",
      "title": "NHRN DRN",
      "separatorRequired": true,
      "components": [
        {
          "optional": false,
          "type": "X",
          "fixedLength": false,
          "length": 20
        }
      ],
      "requires": [
        "01"
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "714",
      "formatString": "N3+X..20",
      "description": "National Healthcare Reimbursement Number (NHRN) - Portugal AIM",
      "regex": "([!%-?A-Z_a-z\\x22]{1,20})",
      "note": "AIs issued in the 7 series represent a special case because they are restricted to: one or a small number of sectors (i.e. are not multi-sectoral); or a country or a region (i.e. are not global).",
      "title": "NHRN AIM",
      "separatorRequired": true,
      "components": [
        {
          "optional": false,
          "type": "X",
          "fixedLength": false,
          "length": 20
        }
      ],
      "requires": [
        "01"
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "715",
      "formatString": "N3+X..20",
      "description": "National Healthcare Reimbursement Number (NHRN) - United States of America NDC",
      "regex": "([!%-?A-Z_a-z\\x22]{1,20})",
      "note": "AIs issued in the 7 series represent a special case because they are restricted to: one or a small number of sectors (i.e. are not multi-sectoral); or a country or a region (i.e. are not global).",
      "title": "NHRN NDC",
      "separatorRequired": true,
      "components": [
        {
          "optional": false,
          "type": "X",
          "fixedLength": false,
          "length": 20
        }
      ],
      "requires": [
        "01"
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "716",
      "formatString": "N3+X..20",
      "description": "National Healthcare Reimbursement Number (NHRN) - Italy AIC",
      "regex": "([!%-?A-Z_a-z\\x22]{1,20})",
      "note": "AIs issued in the 7 series represent a special case because they are restricted to: one or a small number of sectors (i.e. are not multi-sectoral); or a country or a region (i.e. are not global).",
      "title": "NHRN AIC",
      "separatorRequired": true,
      "components": [
        {
          "optional": false,
          "type": "X",
          "fixedLength": false,
          "length": 20
        }
      ],
      "requires": [
        "01"
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "7230",
      "formatString": "X2+X..28",
      "description": "Certification Reference",
      "regex": "([!%-?A-Z_a-z\\x22]{3,30})",
      "note": "The fourth digit of this GS1 Application Identifier indicates the sequence number, allowing for multiple occurrences of the AI.",
      "start": "7230",
      "end": "7239",
      "title": "CERT # 0",
      "separatorRequired": true,
      "components": [
        {
          "optional": false,
          "type": "X",
          "fixedLength": true,
          "length": 2
        },
        {
          "optional": false,
          "type": "X",
          "fixedLength": false,
          "length": 28
        }
      ],
      "requires": [
        "01",
        "8004"
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "7231",
      "formatString": "X2+X..28",
      "description": "Certification Reference",
      "regex": "([!%-?A-Z_a-z\\x22]{3,30})",
      "note": "The fourth digit of this GS1 Application Identifier indicates the sequence number, allowing for multiple occurrences of the AI.",
      "start": "7230",
      "end": "7239",
      "title": "CERT # 1",
      "separatorRequired": true,
      "components": [
        {
          "optional": false,
          "type": "X",
          "fixedLength": true,
          "length": 2
        },
        {
          "optional": false,
          "type": "X",
          "fixedLength": false,
          "length": 28
        }
      ],
      "requires": [
        "01",
        "8004"
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "7232",
      "formatString": "X2+X..28",
      "description": "Certification Reference",
      "regex": "([!%-?A-Z_a-z\\x22]{3,30})",
      "note": "The fourth digit of this GS1 Application Identifier indicates the sequence number, allowing for multiple occurrences of the AI.",
      "start": "7230",
      "end": "7239",
      "title": "CERT # 2",
      "separatorRequired": true,
      "components": [
        {
          "optional": false,
          "type": "X",
          "fixedLength": true,
          "length": 2
        },
        {
          "optional": false,
          "type": "X",
          "fixedLength": false,
          "length": 28
        }
      ],
      "requires": [
        "01",
        "8004"
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "7233",
      "formatString": "X2+X..28",
      "description": "Certification Reference",
      "regex": "([!%-?A-Z_a-z\\x22]{3,30})",
      "note": "The fourth digit of this GS1 Application Identifier indicates the sequence number, allowing for multiple occurrences of the AI.",
      "start": "7230",
      "end": "7239",
      "title": "CERT # 3",
      "separatorRequired": true,
      "components": [
        {
          "optional": false,
          "type": "X",
          "fixedLength": true,
          "length": 2
        },
        {
          "optional": false,
          "type": "X",
          "fixedLength": false,
          "length": 28
        }
      ],
      "requires": [
        "01",
        "8004"
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "7234",
      "formatString": "X2+X..28",
      "description": "Certification Reference",
      "regex": "([!%-?A-Z_a-z\\x22]{3,30})",
      "note": "The fourth digit of this GS1 Application Identifier indicates the sequence number, allowing for multiple occurrences of the AI.",
      "start": "7230",
      "end": "7239",
      "title": "CERT # 4",
      "separatorRequired": true,
      "components": [
        {
          "optional": false,
          "type": "X",
          "fixedLength": true,
          "length": 2
        },
        {
          "optional": false,
          "type": "X",
          "fixedLength": false,
          "length": 28
        }
      ],
      "requires": [
        "01",
        "8004"
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "7235",
      "formatString": "X2+X..28",
      "description": "Certification Reference",
      "regex": "([!%-?A-Z_a-z\\x22]{3,30})",
      "note": "The fourth digit of this GS1 Application Identifier indicates the sequence number, allowing for multiple occurrences of the AI.",
      "start": "7230",
      "end": "7239",
      "title": "CERT # 5",
      "separatorRequired": true,
      "components": [
        {
          "optional": false,
          "type": "X",
          "fixedLength": true,
          "length": 2
        },
        {
          "optional": false,
          "type": "X",
          "fixedLength": false,
          "length": 28
        }
      ],
      "requires": [
        "01",
        "8004"
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "7236",
      "formatString": "X2+X..28",
      "description": "Certification Reference",
      "regex": "([!%-?A-Z_a-z\\x22]{3,30})",
      "note": "The fourth digit of this GS1 Application Identifier indicates the sequence number, allowing for multiple occurrences of the AI.",
      "start": "7230",
      "end": "7239",
      "title": "CERT # 6",
      "separatorRequired": true,
      "components": [
        {
          "optional": false,
          "type": "X",
          "fixedLength": true,
          "length": 2
        },
        {
          "optional": false,
          "type": "X",
          "fixedLength": false,
          "length": 28
        }
      ],
      "requires": [
        "01",
        "8004"
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "7237",
      "formatString": "X2+X..28",
      "description": "Certification Reference",
      "regex": "([!%-?A-Z_a-z\\x22]{3,30})",
      "note": "The fourth digit of this GS1 Application Identifier indicates the sequence number, allowing for multiple occurrences of the AI.",
      "start": "7230",
      "end": "7239",
      "title": "CERT # 7",
      "separatorRequired": true,
      "components": [
        {
          "optional": false,
          "type": "X",
          "fixedLength": true,
          "length": 2
        },
        {
          "optional": false,
          "type": "X",
          "fixedLength": false,
          "length": 28
        }
      ],
      "requires": [
        "01",
        "8004"
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "7238",
      "formatString": "X2+X..28",
      "description": "Certification Reference",
      "regex": "([!%-?A-Z_a-z\\x22]{3,30})",
      "note": "The fourth digit of this GS1 Application Identifier indicates the sequence number, allowing for multiple occurrences of the AI.",
      "start": "7230",
      "end": "7239",
      "title": "CERT # 8",
      "separatorRequired": true,
      "components": [
        {
          "optional": false,
          "type": "X",
          "fixedLength": true,
          "length": 2
        },
        {
          "optional": false,
          "type": "X",
          "fixedLength": false,
          "length": 28
        }
      ],
      "requires": [
        "01",
        "8004"
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "7239",
      "formatString": "X2+X..28",
      "description": "Certification Reference",
      "regex": "([!%-?A-Z_a-z\\x22]{3,30})",
      "note": "The fourth digit of this GS1 Application Identifier indicates the sequence number, allowing for multiple occurrences of the AI.",
      "start": "7230",
      "end": "7239",
      "title": "CERT # 9",
      "separatorRequired": true,
      "components": [
        {
          "optional": false,
          "type": "X",
          "fixedLength": true,
          "length": 2
        },
        {
          "optional": false,
          "type": "X",
          "fixedLength": false,
          "length": 28
        }
      ],
      "requires": [
        "01",
        "8004"
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "7240",
      "formatString": "N4+X..20",
      "description": "Protocol ID",
      "regex": "([!%-?A-Z_a-z\\x22]{1,20})",
      "note": "AIs issued in the 7 series represent a special case because they are restricted to: one or a small number of sectors (i.e. are not multi-sectoral); or a country or a region (i.e. are not global).",
      "title": "PROTOCOL",
      "separatorRequired": true,
      "components": [
        {
          "optional": false,
          "type": "X",
          "fixedLength": false,
          "length": 20
        }
      ],
      "requires": [
        "01",
        "8006"
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "7241",
      "formatString": "N4+N2",
      "description": "AIDC media type",
      "regex": "(\\d{2})",
      "note": "AIs issued in the 7 series represent a special case because they are restricted to: one or a small number of sectors (i.e. are not multi-sectoral); or a country or a region (i.e. are not global).",
      "title": "AIDC MEDIA TYPE",
      "separatorRequired": true,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 2
        }
      ],
      "requires": [
        "8017",
        "8018"
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "7242",
      "formatString": "N4+X..25",
      "description": "Version Control Number (VCN)",
      "regex": "([!%-?A-Z_a-z\\x22]{1,25})",
      "note": "AIs issued in the 7 series represent a special case because they are restricted to: one or a small number of sectors (i.e. are not multi-sectoral); or a country or a region (i.e. are not global).",
      "title": "VCN",
      "separatorRequired": true,
      "components": [
        {
          "optional": false,
          "type": "X",
          "fixedLength": false,
          "length": 25
        }
      ],
      "requires": [
        "8017",
        "8018"
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "7250",
      "formatString": "N4+N8",
      "description": "Date of birth (YYYYMMDD)",
      "regex": "(\\d{4}(?:0\\d|1[0-2])(?:[0-2]\\d|3[01]))",
      "note": "AIs issued in the 7 series represent a special case because they are restricted to: one or a small number of sectors (i.e. are not multi-sectoral); or a country or a region (i.e. are not global).",
      "title": "DOB",
      "separatorRequired": true,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 8,
          "format": "yyyymmdd"
        }
      ],
      "excludes": [
        "7251"
      ],
      "requires": [
        "8018"
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "7251",
      "formatString": "N4+N12",
      "description": "Date and time of birth (YYYYMMDDhhmm)",
      "regex": "(\\d{4}(?:0\\d|1[0-2])(?:[0-2]\\d|3[01])(?:[01]\\d|2[0-3])(?:[0-5]\\d))",
      "note": "AIs issued in the 7 series represent a special case because they are restricted to: one or a small number of sectors (i.e. are not multi-sectoral); or a country or a region (i.e. are not global).",
      "title": "DOB TIME",
      "separatorRequired": true,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 8,
          "format": "yyyymmdd"
        },
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 4,
          "format": "hhmm"
        }
      ],
      "excludes": [
        "7250"
      ],
      "requires": [
        "8018"
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "7252",
      "formatString": "N4+N1",
      "description": "Biological sex",
      "regex": "(\\d{1})",
      "note": "AIs issued in the 7 series represent a special case because they are restricted to: one or a small number of sectors (i.e. are not multi-sectoral); or a country or a region (i.e. are not global).",
      "title": "BIO SEX",
      "separatorRequired": true,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 1,
          "format": "iso5218"
        }
      ],
      "requires": [
        "8018"
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "7253",
      "formatString": "N4+X..40",
      "description": "Family name of person",
      "regex": "((?:[!%-?A-Z_a-z\\x22]|%[0-9A-Fa-f][0-9A-Fa-f]%[0-9A-Fa-f][0-9A-Fa-f]){1,40})",
      "note": "AIs issued in the 7 series represent a special case because they are restricted to: one or a small number of sectors (i.e. are not multi-sectoral); or a country or a region (i.e. are not global).",
      "title": "FAMILY NAME",
      "separatorRequired": true,
      "components": [
        {
          "optional": false,
          "type": "X",
          "fixedLength": false,
          "length": 40,
          "format": "pcenc"
        }
      ],
      "excludes": [
        "7256",
        "7259"
      ],
      "requires": [
        "8017",
        "8018"
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "7254",
      "formatString": "N4+X..40",
      "description": "Given name of person",
      "regex": "((?:[!%-?A-Z_a-z\\x22]|%[0-9A-Fa-f][0-9A-Fa-f]%[0-9A-Fa-f][0-9A-Fa-f]){1,40})",
      "note": "AIs issued in the 7 series represent a special case because they are restricted to: one or a small number of sectors (i.e. are not multi-sectoral); or a country or a region (i.e. are not global).",
      "title": "GIVEN NAME",
      "separatorRequired": true,
      "components": [
        {
          "optional": false,
          "type": "X",
          "fixedLength": false,
          "length": 40,
          "format": "pcenc"
        }
      ],
      "excludes": [
        "7256",
        "7259"
      ],
      "requires": [
        "8017",
        "8018"
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "7255",
      "formatString": "N4+X..10",
      "description": "Name suffix of person",
      "regex": "((?:[!%-?A-Z_a-z\\x22]|%[0-9A-Fa-f][0-9A-Fa-f]%[0-9A-Fa-f][0-9A-Fa-f]){1,10})",
      "note": "AIs issued in the 7 series represent a special case because they are restricted to: one or a small number of sectors (i.e. are not multi-sectoral); or a country or a region (i.e. are not global).",
      "title": "SUFFIX",
      "separatorRequired": true,
      "components": [
        {
          "optional": false,
          "type": "X",
          "fixedLength": false,
          "length": 10
        }
      ],
      "excludes": [
        "7256",
        "7259"
      ],
      "requires": [
        "8017",
        "8018"
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "7256",
      "formatString": "N4+X..90",
      "description": "Full name of person",
      "regex": "((?:[!%-?A-Z_a-z\\x22]|%[0-9A-Fa-f][0-9A-Fa-f]%[0-9A-Fa-f][0-9A-Fa-f]){1,90})",
      "note": "AIs issued in the 7 series represent a special case because they are restricted to: one or a small number of sectors (i.e. are not multi-sectoral); or a country or a region (i.e. are not global).",
      "title": "FULL NAME",
      "separatorRequired": true,
      "components": [
        {
          "optional": false,
          "type": "X",
          "fixedLength": false,
          "length": 90,
          "format": "pcenc"
        }
      ],
      "excludes": [
        "7253",
        "7254",
        "7255",
        "7259"
      ],
      "requires": [
        "8017",
        "8018"
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "7257",
      "formatString": "N4+X..70",
      "description": "Address of person",
      "regex": "((?:[!%-?A-Z_a-z\\x22]|%[0-9A-Fa-f][0-9A-Fa-f]%[0-9A-Fa-f][0-9A-Fa-f]){1,70})",
      "note": "AIs issued in the 7 series represent a special case because they are restricted to: one or a small number of sectors (i.e. are not multi-sectoral); or a country or a region (i.e. are not global).",
      "title": "PERSON ADDR",
      "separatorRequired": true,
      "components": [
        {
          "optional": false,
          "type": "X",
          "fixedLength": false,
          "length": 70,
          "format": "pcenc"
        }
      ],
      "requires": [
        "8018"
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "7258",
      "formatString": "N4+N1+X1+N1",
      "description": "Baby birth sequence",
      "regex": "(\\d[/]\\d)",
      "note": "AIs issued in the 7 series represent a special case because they are restricted to: one or a small number of sectors (i.e. are not multi-sectoral); or a country or a region (i.e. are not global).",
      "title": "BIRTH SEQUENCE",
      "separatorRequired": true,
      "components": [
        {
          "optional": false,
          "type": "X",
          "fixedLength": true,
          "length": 3,
          "format": "posinseqslash"
        }
      ],
      "requires": [
        [
          "8018",
          "7259"
        ]
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "7259",
      "formatString": "N4+X..40",
      "description": "Baby of family name",
      "regex": "((?:[!%-?A-Z_a-z\\x22]|%[0-9A-Fa-f][0-9A-Fa-f]%[0-9A-Fa-f][0-9A-Fa-f]){1,40})",
      "note": "AIs issued in the 7 series represent a special case because they are restricted to: one or a small number of sectors (i.e. are not multi-sectoral); or a country or a region (i.e. are not global).",
      "title": "BABY",
      "separatorRequired": true,
      "components": [
        {
          "optional": false,
          "type": "X",
          "fixedLength": false,
          "length": 40,
          "format": "pcenc"
        }
      ],
      "excludes": [
        "7253",
        "7254",
        "7255",
        "7256"
      ],
      "requires": [
        "8018"
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "8001",
      "formatString": "N4+N14",
      "description": "Roll products (width, length, core diameter, direction, splices)",
      "regex": "(\\d{4})(\\d{5})(\\d{3})(\\d{1})(\\d{1})",
      "note": "",
      "title": "DIMENSIONS",
      "separatorRequired": true,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 4,
          "format": "nonzero"
        },
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 5,
          "format": "nonzero"
        },
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 3,
          "format": "nonzero"
        },
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 1,
          "format": "winding"
        },
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 1
        }
      ],
      "requires": [
        "01"
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "8002",
      "formatString": "N4+X..20",
      "description": "Cellular mobile telephone identifier",
      "regex": "([!%-?A-Z_a-z\\x22]{1,20})",
      "note": "",
      "title": "CMT No.",
      "separatorRequired": true,
      "components": [
        {
          "optional": false,
          "type": "X",
          "fixedLength": false,
          "length": 20
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "8003",
      "formatString": "N4+N14[+X..16]",
      "description": "Global Returnable Asset Identifier (GRAI)",
      "regex": "(0)(\\d{13})([!%-?A-Z_a-z\\x22]{0,16})",
      "note": "",
      "title": "GRAI",
      "separatorRequired": true,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 1,
          "format": "zero"
        },
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 13,
          "checkDigit": true,
          "key": true
        },
        {
          "optional": true,
          "type": "X",
          "fixedLength": false,
          "length": 16
        }
      ],
      "gs1DigitalLinkPrimaryKey": true,
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "8004",
      "formatString": "N4+X..30",
      "description": "Global Individual Asset Identifier (GIAI)",
      "regex": "([!%-?A-Z_a-z\\x22]{1,30})",
      "note": "",
      "title": "GIAI",
      "separatorRequired": true,
      "components": [
        {
          "optional": false,
          "type": "X",
          "fixedLength": false,
          "length": 30,
          "key": true
        }
      ],
      "gs1DigitalLinkPrimaryKey": true,
      "gs1DigitalLinkQualifiers": [
        [
          "7040"
        ]
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "8005",
      "formatString": "N4+N6",
      "description": "Price per unit of measure",
      "regex": "(\\d{6})",
      "note": "",
      "title": "PRICE PER UNIT",
      "separatorRequired": true,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 6
        }
      ],
      "requires": [
        "01",
        "02"
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "8006",
      "formatString": "N4+N14+N2+N2",
      "description": "Identification of an individual trade item piece (ITIP)",
      "regex": "(\\d{14})(\\d{4})",
      "note": "",
      "title": "ITIP",
      "separatorRequired": true,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 14,
          "checkDigit": true
        },
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 4,
          "format": "pieceoftotal"
        }
      ],
      "gs1DigitalLinkPrimaryKey": true,
      "gs1DigitalLinkQualifiers": [
        [
          "22",
          "10",
          "21"
        ]
      ],
      "excludes": [
        "01",
        "37"
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "8007",
      "formatString": "N4+X..34",
      "description": "International Bank Account Number (IBAN)",
      "regex": "([!%-?A-Z_a-z\\x22]{1,34})",
      "note": "",
      "title": "IBAN",
      "separatorRequired": true,
      "components": [
        {
          "optional": false,
          "type": "X",
          "fixedLength": false,
          "length": 34,
          "format": "iban"
        }
      ],
      "requires": [
        [
          "8020",
          "415"
        ]
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "8008",
      "formatString": "N4+N8[+N..4]",
      "description": "Date and time of production (YYMMDDhh[mm[ss]])",
      "regex": "(\\d{2}(?:0\\d|1[0-2])(?:[0-2]\\d|3[01])(?:[01]\\d|2[0-3]))((?:[0-5]\\d)(?:[0-5]\\d)?)?",
      "note": "",
      "title": "PROD TIME",
      "separatorRequired": true,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 8,
          "format": "yymmddhh"
        },
        {
          "optional": true,
          "type": "N",
          "fixedLength": false,
          "length": 4,
          "format": "mmoptss"
        }
      ],
      "requires": [
        "01",
        "02"
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "8009",
      "formatString": "N4+X..50",
      "description": "Optically Readable Sensor Indicator",
      "regex": "([!%-?A-Z_a-z\\x22]{1,50})",
      "note": "",
      "title": "OPTSEN",
      "separatorRequired": true,
      "components": [
        {
          "optional": false,
          "type": "X",
          "fixedLength": false,
          "length": 50
        }
      ],
      "requires": [
        "00",
        "01"
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "8010",
      "formatString": "N4+Y..30",
      "description": "Component/Part Identifier (CPID)",
      "regex": "([A-Z0-9/#-]{5,30})",
      "note": "",
      "title": "CPID",
      "separatorRequired": true,
      "components": [
        {
          "optional": false,
          "type": "Y",
          "fixedLength": false,
          "length": 30,
          "key": true
        }
      ],
      "gs1DigitalLinkPrimaryKey": true,
      "gs1DigitalLinkQualifiers": [
        [
          "8011"
        ]
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "8011",
      "formatString": "N4+N..12",
      "description": "Component/Part Identifier serial number (CPID SERIAL)",
      "regex": "(\\d{1,12})",
      "note": "",
      "title": "CPID SERIAL",
      "separatorRequired": true,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": false,
          "length": 12,
          "format": "nozeroprefix"
        }
      ],
      "requires": [
        "8010"
      ],
      "validAsDataAttribute": false
    },
    {
      "applicationIdentifier": "8012",
      "formatString": "N4+X..20",
      "description": "Software version",
      "regex": "([!%-?A-Z_a-z\\x22]{1,20})",
      "note": "",
      "title": "VERSION",
      "separatorRequired": true,
      "components": [
        {
          "optional": false,
          "type": "X",
          "fixedLength": false,
          "length": 20
        }
      ],
      "requires": [
        "01",
        "8006"
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "8013",
      "formatString": "N4+X..25",
      "description": "Global Model Number (GMN)",
      "regex": "([!%-?A-Z_a-z\\x22]{1,25})",
      "note": "",
      "title": "GMN",
      "separatorRequired": true,
      "components": [
        {
          "optional": false,
          "type": "X",
          "fixedLength": false,
          "length": 25,
          "checkCharacters": true,
          "key": true
        }
      ],
      "gs1DigitalLinkPrimaryKey": true,
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "8014",
      "formatString": "N4+X..25",
      "description": "Highly Individualised Device Registration Identifier (HIDRI)",
      "regex": "([!%-?A-Z_a-z\\x22]{1,25})",
      "note": "",
      "title": "MUDI",
      "separatorRequired": true,
      "components": [
        {
          "optional": false,
          "type": "X",
          "fixedLength": false,
          "length": 25,
          "checkCharacters": true,
          "key": true
        }
      ],
      "requires": [
        "01"
      ],
      "validAsDataAttribute": false
    },
    {
      "applicationIdentifier": "8017",
      "formatString": "N4+N18",
      "description": "Global Service Relation Number (GSRN) to identify the relationship between an organisation offering services and the provider of services",
      "regex": "(\\d{18})",
      "note": "",
      "title": "GSRN - PROVIDER",
      "separatorRequired": true,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 18,
          "checkDigit": true,
          "key": true
        }
      ],
      "gs1DigitalLinkPrimaryKey": true,
      "gs1DigitalLinkQualifiers": [
        [
          "8019"
        ]
      ],
      "excludes": [
        "8018"
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "8018",
      "formatString": "N4+N18",
      "description": "Global Service Relation Number (GSRN) to identify the relationship between an organisation offering services and the recipient of services",
      "regex": "(\\d{18})",
      "note": "",
      "title": "GSRN - RECIPIENT",
      "separatorRequired": true,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 18,
          "checkDigit": true,
          "key": true
        }
      ],
      "gs1DigitalLinkPrimaryKey": true,
      "gs1DigitalLinkQualifiers": [
        [
          "8019"
        ]
      ],
      "excludes": [
        "8017"
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "8019",
      "formatString": "N4+N..10",
      "description": "Service Relation Instance Number (SRIN)",
      "regex": "(\\d{1,10})",
      "note": "",
      "title": "SRIN",
      "separatorRequired": true,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": false,
          "length": 10
        }
      ],
      "requires": [
        "8017",
        "8018"
      ],
      "validAsDataAttribute": false
    },
    {
      "applicationIdentifier": "8020",
      "formatString": "N4+X..25",
      "description": "Payment slip reference number",
      "regex": "([!%-?A-Z_a-z\\x22]{1,25})",
      "note": "",
      "title": "REF No.",
      "separatorRequired": true,
      "components": [
        {
          "optional": false,
          "type": "X",
          "fixedLength": false,
          "length": 25
        }
      ],
      "requires": [
        "415"
      ],
      "validAsDataAttribute": false
    },
    {
      "applicationIdentifier": "8026",
      "formatString": "N4+N14+N2+N2",
      "description": "Identification of pieces of a trade item (ITIP) contained in a logistic unit",
      "regex": "(\\d{14})(\\d{4})",
      "note": "",
      "title": "ITIP CONTENT",
      "separatorRequired": true,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 14,
          "checkDigit": true
        },
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 4,
          "format": "pieceoftotal"
        }
      ],
      "requires": [
        [
          "00",
          "37"
        ]
      ],
      "excludes": [
        "02",
        "8006"
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "8030",
      "formatString": "N4+Z..90",
      "description": "Digital Signature (DigSig)",
      "regex": "([0-9A-Za-z_-]{1,90})",
      "note": "",
      "title": "DIGSIG",
      "separatorRequired": true,
      "components": [
        {
          "optional": false,
          "type": "X",
          "fixedLength": false,
          "length": 90
        }
      ],
      "requires": [
        [
          "01",
          "21"
        ],
        [
          "8006",
          "21"
        ],
        [
          "8010",
          "8011"
        ],
        "8003",
        "8004",
        "8017",
        "8018",
        "00",
        "253",
        "255"
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "8110",
      "formatString": "N4+X..70",
      "label": "",
      "description": "Coupon code identification for use in North America",
      "regex": "([!%-?A-Z_a-z\\x22]{1,70})",
      "note": "",
      "title": "",
      "separatorRequired": true,
      "components": [
        {
          "optional": false,
          "type": "X",
          "fixedLength": false,
          "length": 70
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "8111",
      "formatString": "N4+N4",
      "description": "Loyalty points of a coupon",
      "regex": "(\\d{4})",
      "note": "",
      "title": "POINTS",
      "separatorRequired": true,
      "components": [
        {
          "optional": false,
          "type": "N",
          "fixedLength": true,
          "length": 4
        }
      ],
      "requires": [
        "255"
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "8112",
      "formatString": "N4+X..70",
      "label": "",
      "description": "Positive offer file coupon code identification for use in North America",
      "regex": "([!%-?A-Z_a-z\\x22]{1,70})",
      "note": "",
      "title": "",
      "separatorRequired": true,
      "components": [
        {
          "optional": false,
          "type": "X",
          "fixedLength": false,
          "length": 70
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "8200",
      "formatString": "N4+X..70",
      "description": "Extended Packaging URL",
      "regex": "([!%-?A-Z_a-z\\x22]{1,70})",
      "note": "",
      "title": "PRODUCT URL",
      "separatorRequired": true,
      "components": [
        {
          "optional": false,
          "type": "X",
          "fixedLength": false,
          "length": 70
        }
      ],
      "requires": [
        "01"
      ],
      "validAsDataAttribute": false
    },
    {
      "applicationIdentifier": "90",
      "formatString": "N2+X..30",
      "description": "Information mutually agreed between trading partners",
      "regex": "([!%-?A-Z_a-z\\x22]{1,30})",
      "note": "",
      "title": "INTERNAL",
      "separatorRequired": true,
      "components": [
        {
          "optional": false,
          "type": "X",
          "fixedLength": false,
          "length": 30
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "91",
      "formatString": "N2+X..90",
      "description": "Company internal information",
      "regex": "([!%-?A-Z_a-z\\x22]{1,90})",
      "note": "",
      "start": "91",
      "end": "99",
      "title": "INTERNAL",
      "separatorRequired": true,
      "components": [
        {
          "optional": false,
          "type": "X",
          "fixedLength": false,
          "length": 90
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "92",
      "formatString": "N2+X..90",
      "description": "Company internal information",
      "regex": "([!%-?A-Z_a-z\\x22]{1,90})",
      "note": "",
      "start": "91",
      "end": "99",
      "title": "INTERNAL",
      "separatorRequired": true,
      "components": [
        {
          "optional": false,
          "type": "X",
          "fixedLength": false,
          "length": 90
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "93",
      "formatString": "N2+X..90",
      "description": "Company internal information",
      "regex": "([!%-?A-Z_a-z\\x22]{1,90})",
      "note": "",
      "start": "91",
      "end": "99",
      "title": "INTERNAL",
      "separatorRequired": true,
      "components": [
        {
          "optional": false,
          "type": "X",
          "fixedLength": false,
          "length": 90
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "94",
      "formatString": "N2+X..90",
      "description": "Company internal information",
      "regex": "([!%-?A-Z_a-z\\x22]{1,90})",
      "note": "",
      "start": "91",
      "end": "99",
      "title": "INTERNAL",
      "separatorRequired": true,
      "components": [
        {
          "optional": false,
          "type": "X",
          "fixedLength": false,
          "length": 90
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "95",
      "formatString": "N2+X..90",
      "description": "Company internal information",
      "regex": "([!%-?A-Z_a-z\\x22]{1,90})",
      "note": "",
      "start": "91",
      "end": "99",
      "title": "INTERNAL",
      "separatorRequired": true,
      "components": [
        {
          "optional": false,
          "type": "X",
          "fixedLength": false,
          "length": 90
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "96",
      "formatString": "N2+X..90",
      "description": "Company internal information",
      "regex": "([!%-?A-Z_a-z\\x22]{1,90})",
      "note": "",
      "start": "91",
      "end": "99",
      "title": "INTERNAL",
      "separatorRequired": true,
      "components": [
        {
          "optional": false,
          "type": "X",
          "fixedLength": false,
          "length": 90
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "97",
      "formatString": "N2+X..90",
      "description": "Company internal information",
      "regex": "([!%-?A-Z_a-z\\x22]{1,90})",
      "note": "",
      "start": "91",
      "end": "99",
      "title": "INTERNAL",
      "separatorRequired": true,
      "components": [
        {
          "optional": false,
          "type": "X",
          "fixedLength": false,
          "length": 90
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "98",
      "formatString": "N2+X..90",
      "description": "Company internal information",
      "regex": "([!%-?A-Z_a-z\\x22]{1,90})",
      "note": "",
      "start": "91",
      "end": "99",
      "title": "INTERNAL",
      "separatorRequired": true,
      "components": [
        {
          "optional": false,
          "type": "X",
          "fixedLength": false,
          "length": 90
        }
      ],
      "validAsDataAttribute": true
    },
    {
      "applicationIdentifier": "99",
      "formatString": "N2+X..90",
      "description": "Company internal information",
      "regex": "([!%-?A-Z_a-z\\x22]{1,90})",
      "note": "",
      "start": "91",
      "end": "99",
      "title": "INTERNAL",
      "separatorRequired": true,
      "components": [
        {
          "optional": false,
          "type": "X",
          "fixedLength": false,
          "length": 90
        }
      ],
      "validAsDataAttribute": true
    }
  ]
}