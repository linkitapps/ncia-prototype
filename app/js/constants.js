'use strict';

var AppSettings = {
  appTitle: '시스템 SLA 관리 솔루션',
  apiUrl: '/api/v1',
  networkData: {
      "nodes": [
          {
              "id": "root",
              "loaded": true,
              "style": {
                  "label": "인터넷",
                  "type": "cloud"
              },
              "properties": {
                  "type": "인터넷"
              },
              "visibility": {
                  "경찰청": true,
                  "미래창조부": true,
                  "국민안전처": true
              }
          },
          {
              "id": "SVE_000050",
              "loaded": true,
              "style": {
                  "label": "라우터",
                  "type": "router"
              },
              "properties": {
                  "type": "네트워크"
              },
              "visibility": {
                  "경찰청": false,
                  "미래창조부": false,
                  "국민안전처": true
              }
          },
          {
              "id": "CCTV1",
              "loaded": true,
              "style": {
                  "label": "CCTV1",
                  "type": "cctv"
              },
              "properties": {
                  "type": "CCTV"
              },
              "visibility": {
                  "경찰청": true,
                  "미래창조부": false,
                  "국민안전처": false
              },
              "group": "CCTV"
          },
          {
              "id": "CCTV2",
              "loaded": true,
              "style": {
                  "label": "CCTV2",
                  "type": "cctv"
              },
              "properties": {
                  "type": "CCTV"
              },
              "visibility": {
                  "경찰청": true,
                  "미래창조부": false,
                  "국민안전처": false
              },
              "group": "CCTV"
          },
          {
              "id": "CCTV3",
              "loaded": true,
              "style": {
                  "label": "CCTV3",
                  "type": "cctv"
              },
              "properties": {
                  "type": "CCTV"
              },
              "visibility": {
                  "경찰청": true,
                  "미래창조부": false,
                  "국민안전처": false
              },
              "group": "CCTV"
          },
          {
              "id": "SVE_000001",
              "loaded": true,
              "style": {
                  "label": "TEST L4 스위치",
                  "type": "switch-l4"
              },
              "properties": {
                  "type": "네트워크",
                  "hw_id": "SVE_000001",
                  "name": "TEST L4 스위치",
                  "IP": "120.123.35.1",
                  "OS": "",
                  "location": "대전전산센터 2층",
                  "admin_id": "junHu",
                  "admin_name": "허준",
                  "department_code": "130000",
                  "division_code": "130010",
                  "admin": {
                      "id": "junHu",
                      "name": "허준",
                      "phone": "010-2343-1243",
                      "auth": "관리자",
                      "note": "해당 네트워크장비 관리"
                  },
                  "department": {
                      "code": "130000",
                      "name": "국민안전처"
                  },
                  "division": {
                      "code": "130010",
                      "name": "재난방재부"
                  }
              },
              "visibility": {
                  "경찰청": false,
                  "미래창조부": false,
                  "국민안전처": true
              }
          },
          {
              "id": "SVE_000002",
              "loaded": true,
              "style": {
                  "label": "TEST WEB 1",
                  "type": "server-web"
              },
              "properties": {
                  "type": "서버",
                  "hw_id": "SVE_000002",
                  "name": "TEST WEB 1",
                  "IP": "120.123.35.2",
                  "OS": "LINUX",
                  "location": "대전전산센터 2층",
                  "admin_id": "jdhong",
                  "admin_name": "홍길동",
                  "department_code": "130000",
                  "division_code": "130010",
                  "admin": {
                      "id": "jdhong",
                      "name": "홍길동",
                      "phone": "010-9890-2378",
                      "auth": "관리자",
                      "note": "해당 프로젝트 서버 관리"
                  },
                  "department": {
                      "code": "130000",
                      "name": "국민안전처"
                  },
                  "division": {
                      "code": "130010",
                      "name": "재난방재부"
                  }
              },
              "visibility": {
                  "경찰청": false,
                  "미래창조부": false,
                  "국민안전처": true
              },
              "group": "130000-1"
          },
          {
              "id": "SVE_000003",
              "loaded": true,
              "style": {
                  "label": "TEST WEB 2",
                  "type": "server-web"
              },
              "properties": {
                  "type": "서버",
                  "hw_id": "SVE_000003",
                  "name": "TEST WEB 2",
                  "IP": "120.123.35.3",
                  "OS": "LINUX",
                  "location": "대전전산센터 2층",
                  "admin_id": "jdhong",
                  "admin_name": "홍길동",
                  "department_code": "130000",
                  "division_code": "130010",
                  "admin": {
                      "id": "jdhong",
                      "name": "홍길동",
                      "phone": "010-9890-2378",
                      "auth": "관리자",
                      "note": "해당 프로젝트 서버 관리"
                  },
                  "department": {
                      "code": "130000",
                      "name": "국민안전처"
                  },
                  "division": {
                      "code": "130010",
                      "name": "재난방재부"
                  }
              },
              "visibility": {
                  "경찰청": false,
                  "미래창조부": false,
                  "국민안전처": true
              },
              "group": "130000-1"
          },
          {
              "id": "SVE_000004",
              "loaded": true,
              "style": {
                  "label": "TEST WAS 1",
                  "type": "server-was"
              },
              "properties": {
                  "type": "서버",
                  "hw_id": "SVE_000004",
                  "name": "TEST WAS 1",
                  "IP": "120.123.35.4",
                  "OS": "LINUX",
                  "location": "대전전산센터 2층",
                  "admin_id": "jdhong",
                  "admin_name": "홍길동",
                  "department_code": "130000",
                  "division_code": "130010",
                  "admin": {
                      "id": "jdhong",
                      "name": "홍길동",
                      "phone": "010-9890-2378",
                      "auth": "관리자",
                      "note": "해당 프로젝트 서버 관리"
                  },
                  "department": {
                      "code": "130000",
                      "name": "국민안전처"
                  },
                  "division": {
                      "code": "130010",
                      "name": "재난방재부"
                  }
              },
              "visibility": {
                  "경찰청": false,
                  "미래창조부": false,
                  "국민안전처": true
              },
              "group": "130000-1"
          },
          {
              "id": "SVE_000005",
              "loaded": true,
              "style": {
                  "label": "TEST WAS 2",
                  "type": "server-was"
              },
              "properties": {
                  "type": "서버",
                  "hw_id": "SVE_000005",
                  "name": "TEST WAS 2",
                  "IP": "120.123.35.5",
                  "OS": "LINUX",
                  "location": "대전전산센터 2층",
                  "admin_id": "jdhong",
                  "admin_name": "홍길동",
                  "department_code": "130000",
                  "division_code": "130010",
                  "admin": {
                      "id": "jdhong",
                      "name": "홍길동",
                      "phone": "010-9890-2378",
                      "auth": "관리자",
                      "note": "해당 프로젝트 서버 관리"
                  },
                  "department": {
                      "code": "130000",
                      "name": "국민안전처"
                  },
                  "division": {
                      "code": "130010",
                      "name": "재난방재부"
                  }
              },
              "visibility": {
                  "경찰청": false,
                  "미래창조부": false,
                  "국민안전처": true
              },
              "group": "130000-1"
          },
          {
              "id": "SVE_000006",
              "loaded": true,
              "style": {
                  "label": "TEST GIS 서버",
                  "type": "server-backup"
              },
              "properties": {
                  "type": "서버",
                  "hw_id": "SVE_000006",
                  "name": "TEST GIS 서버",
                  "IP": "120.123.35.6",
                  "OS": "LINUX",
                  "location": "대전전산센터 2층",
                  "admin_id": "jdhong",
                  "admin_name": "홍길동",
                  "department_code": "130000",
                  "division_code": "130010",
                  "admin": {
                      "id": "jdhong",
                      "name": "홍길동",
                      "phone": "010-9890-2378",
                      "auth": "관리자",
                      "note": "해당 프로젝트 서버 관리"
                  },
                  "department": {
                      "code": "130000",
                      "name": "국민안전처"
                  },
                  "division": {
                      "code": "130010",
                      "name": "재난방재부"
                  }
              },
              "visibility": {
                  "경찰청": false,
                  "미래창조부": false,
                  "국민안전처": true
              },
              "group": "130000-1"
          },
          {
              "id": "SVE_000007",
              "loaded": true,
              "style": {
                  "label": "TEST DB",
                  "type": "server-db"
              },
              "properties": {
                  "type": "서버",
                  "hw_id": "SVE_000007",
                  "name": "TEST DB",
                  "IP": "120.123.35.7",
                  "OS": "LINUX",
                  "location": "대전전산센터 2층",
                  "admin_id": "jdhong",
                  "admin_name": "홍길동",
                  "department_code": "130000",
                  "division_code": "130010",
                  "admin": {
                      "id": "jdhong",
                      "name": "홍길동",
                      "phone": "010-9890-2378",
                      "auth": "관리자",
                      "note": "해당 프로젝트 서버 관리"
                  },
                  "department": {
                      "code": "130000",
                      "name": "국민안전처"
                  },
                  "division": {
                      "code": "130010",
                      "name": "재난방재부"
                  }
              },
              "visibility": {
                  "경찰청": false,
                  "미래창조부": false,
                  "국민안전처": true
              },
              "group": "130000-1"
          },
          {
              "id": "SVE_000008",
              "loaded": true,
              "style": {
                  "label": "SAN 스위치1",
                  "type": "switch-san"
              },
              "properties": {
                  "type": "네트워크",
                  "hw_id": "SVE_000008",
                  "name": "SAN 스위치1",
                  "IP": "120.123.35.8",
                  "OS": "",
                  "location": "대전전산센터 2층",
                  "admin_id": "junHu",
                  "admin_name": "허준",
                  "department_code": "130000",
                  "division_code": "130010",
                  "admin": {
                      "id": "junHu",
                      "name": "허준",
                      "phone": "010-2343-1243",
                      "auth": "관리자",
                      "note": "해당 네트워크장비 관리"
                  },
                  "department": {
                      "code": "130000",
                      "name": "국민안전처"
                  },
                  "division": {
                      "code": "130010",
                      "name": "재난방재부"
                  }
              },
              "visibility": {
                  "경찰청": false,
                  "미래창조부": false,
                  "국민안전처": true
              }
          },
          {
              "id": "SVE_000009",
              "loaded": true,
              "style": {
                  "label": "SAN 스위치2",
                  "type": "switch-san"
              },
              "properties": {
                  "type": "네트워크",
                  "hw_id": "SVE_000009",
                  "name": "SAN 스위치2",
                  "IP": "120.123.35.9",
                  "OS": "",
                  "location": "대전전산센터 2층",
                  "admin_id": "junHu",
                  "admin_name": "허준",
                  "department_code": "130000",
                  "division_code": "130010",
                  "admin": {
                      "id": "junHu",
                      "name": "허준",
                      "phone": "010-2343-1243",
                      "auth": "관리자",
                      "note": "해당 네트워크장비 관리"
                  },
                  "department": {
                      "code": "130000",
                      "name": "국민안전처"
                  },
                  "division": {
                      "code": "130010",
                      "name": "재난방재부"
                  }
              },
              "visibility": {
                  "경찰청": false,
                  "미래창조부": false,
                  "국민안전처": true
              }
          },
          {
              "id": "SVE_000010",
              "loaded": true,
              "style": {
                  "label": "TEST 스토리지",
                  "type": "server-storage"
              },
              "properties": {
                  "type": "서버",
                  "hw_id": "SVE_000010",
                  "name": "TEST 스토리지",
                  "IP": "120.123.35.10",
                  "OS": "LINUX",
                  "location": "대전전산센터 2층",
                  "admin_id": "jdhong",
                  "admin_name": "홍길동",
                  "department_code": "130000",
                  "division_code": "130010",
                  "admin": {
                      "id": "jdhong",
                      "name": "홍길동",
                      "phone": "010-9890-2378",
                      "auth": "관리자",
                      "note": "해당 프로젝트 서버 관리"
                  },
                  "department": {
                      "code": "130000",
                      "name": "국민안전처"
                  },
                  "division": {
                      "code": "130010",
                      "name": "재난방재부"
                  }
              },
              "visibility": {
                  "경찰청": false,
                  "미래창조부": false,
                  "국민안전처": true
              },
              "group": "130000-2"
          },
          {
              "id": "SVE_000011",
              "loaded": true,
              "style": {
                  "label": "TEST 백업서버",
                  "type": "server-backup"
              },
              "properties": {
                  "type": "서버",
                  "hw_id": "SVE_000011",
                  "name": "TEST 백업서버",
                  "IP": "120.123.35.11",
                  "OS": "LINUX",
                  "location": "대전전산센터 2층",
                  "admin_id": "jdhong",
                  "admin_name": "홍길동",
                  "department_code": "130000",
                  "division_code": "130010",
                  "admin": {
                      "id": "jdhong",
                      "name": "홍길동",
                      "phone": "010-9890-2378",
                      "auth": "관리자",
                      "note": "해당 프로젝트 서버 관리"
                  },
                  "department": {
                      "code": "130000",
                      "name": "국민안전처"
                  },
                  "division": {
                      "code": "130010",
                      "name": "재난방재부"
                  }
              },
              "visibility": {
                  "경찰청": false,
                  "미래창조부": false,
                  "국민안전처": true
              },
              "group": "130000-2"
          },
          {
              "id": "SVE_000012",
              "loaded": true,
              "style": {
                  "label": "스위치",
                  "type": "switch"
              },
              "properties": {
                  "type": "네트워크",
                  "hw_id": "SVE_000012",
                  "name": "스위치",
                  "IP": "120.123.35.12",
                  "OS": "",
                  "location": "대전전산센터 2층",
                  "admin_id": "junHu",
                  "admin_name": "허준",
                  "department_code": "130000",
                  "division_code": "130010",
                  "admin": {
                      "id": "junHu",
                      "name": "허준",
                      "phone": "010-2343-1243",
                      "auth": "관리자",
                      "note": "해당 네트워크장비 관리"
                  },
                  "department": {
                      "code": "130000",
                      "name": "국민안전처"
                  },
                  "division": {
                      "code": "130010",
                      "name": "재난방재부"
                  }
              },
              "visibility": {
                  "경찰청": false,
                  "미래창조부": false,
                  "국민안전처": true
              }
          },
          {
              "id": "SVE_000013",
              "loaded": true,
              "style": {
                  "label": "방화벽1",
                  "type": "firewall"
              },
              "properties": {
                  "type": "방화벽",
                  "hw_id": "SVE_000013",
                  "name": "방화벽1",
                  "IP": "120.123.35.13",
                  "OS": "",
                  "location": "대전전산센터 2층",
                  "admin_id": "bana",
                  "admin_name": "나보안",
                  "department_code": "130000",
                  "division_code": "130010",
                  "admin": {
                      "id": "bana",
                      "name": "나보안",
                      "phone": "02-4378-3422",
                      "auth": "관리자",
                      "note": "해당 보안장비 관리"
                  },
                  "department": {
                      "code": "130000",
                      "name": "국민안전처"
                  },
                  "division": {
                      "code": "130010",
                      "name": "재난방재부"
                  }
              },
              "visibility": {
                  "경찰청": false,
                  "미래창조부": false,
                  "국민안전처": true
              }
          },
          {
              "id": "SVE_000014",
              "loaded": true,
              "style": {
                  "label": "L4스위치",
                  "type": "switch-l4"
              },
              "properties": {
                  "type": "네트워크",
                  "hw_id": "SVE_000014",
                  "name": "L4스위치",
                  "IP": "120.123.35.14",
                  "OS": "",
                  "location": "대전전산센터 2층",
                  "admin_id": "junHu",
                  "admin_name": "허준",
                  "department_code": "130000",
                  "division_code": "130010",
                  "admin": {
                      "id": "junHu",
                      "name": "허준",
                      "phone": "010-2343-1243",
                      "auth": "관리자",
                      "note": "해당 네트워크장비 관리"
                  },
                  "department": {
                      "code": "130000",
                      "name": "국민안전처"
                  },
                  "division": {
                      "code": "130010",
                      "name": "재난방재부"
                  }
              },
              "visibility": {
                  "경찰청": false,
                  "미래창조부": false,
                  "국민안전처": true
              }
          },
          {
              "id": "SVE_000015",
              "loaded": true,
              "style": {
                  "label": "침입탐지서버",
                  "type": "server-hack"
              },
              "properties": {
                  "type": "서버",
                  "hw_id": "SVE_000015",
                  "name": "침입탐지서버",
                  "IP": "120.123.35.15",
                  "OS": "WINDOWS",
                  "location": "대전전산센터 2층",
                  "admin_id": "bana",
                  "admin_name": "나보안",
                  "department_code": "130000",
                  "division_code": "130010",
                  "admin": {
                      "id": "bana",
                      "name": "나보안",
                      "phone": "02-4378-3422",
                      "auth": "관리자",
                      "note": "해당 보안장비 관리"
                  },
                  "department": {
                      "code": "130000",
                      "name": "국민안전처"
                  },
                  "division": {
                      "code": "130010",
                      "name": "재난방재부"
                  }
              },
              "visibility": {
                  "경찰청": false,
                  "미래창조부": false,
                  "국민안전처": true
              }
          },
          {
              "id": "SVE_000016",
              "loaded": true,
              "style": {
                  "label": "방화벽2",
                  "type": "firewall"
              },
              "properties": {
                  "type": "방화벽",
                  "hw_id": "SVE_000016",
                  "name": "방화벽2",
                  "IP": "120.123.35.16",
                  "OS": "",
                  "location": "대전전산센터 2층",
                  "admin_id": "bana",
                  "admin_name": "나보안",
                  "department_code": "130000",
                  "division_code": "130010",
                  "admin": {
                      "id": "bana",
                      "name": "나보안",
                      "phone": "02-4378-3422",
                      "auth": "관리자",
                      "note": "해당 보안장비 관리"
                  },
                  "department": {
                      "code": "130000",
                      "name": "국민안전처"
                  },
                  "division": {
                      "code": "130010",
                      "name": "재난방재부"
                  }
              },
              "visibility": {
                  "경찰청": false,
                  "미래창조부": false,
                  "국민안전처": true
              }
          },
          {
              "id": "SVE_000017",
              "loaded": true,
              "style": {
                  "label": "라우터1",
                  "type": "router"
              },
              "properties": {
                  "type": "네트워크",
                  "hw_id": "SVE_000017",
                  "name": "라우터1",
                  "IP": "120.123.35.17",
                  "OS": "",
                  "location": "대전전산센터 2층",
                  "admin_id": "junHu",
                  "admin_name": "허준",
                  "department_code": "130000",
                  "division_code": "130010",
                  "admin": {
                      "id": "junHu",
                      "name": "허준",
                      "phone": "010-2343-1243",
                      "auth": "관리자",
                      "note": "해당 네트워크장비 관리"
                  },
                  "department": {
                      "code": "130000",
                      "name": "국민안전처"
                  },
                  "division": {
                      "code": "130010",
                      "name": "재난방재부"
                  }
              },
              "visibility": {
                  "경찰청": false,
                  "미래창조부": false,
                  "국민안전처": true
              }
          },
          {
              "id": "SVE_000045",
              "loaded": true,
              "style": {
                  "label": "라우터",
                  "type": "router"
              },
              "properties": {
                  "type": "네트워크",
                  "hw_id": "SVE_000045",
                  "name": "라우터",
                  "IP": "210.136.71.102",
                  "OS": "",
                  "location": "대전전산센터 2층",
                  "admin_id": "silee",
                  "admin_name": "이수일",
                  "department_code": "160000",
                  "division_code": "160301",
                  "admin": {
                      "id": "silee",
                      "name": "이수일",
                      "phone": "010-3999-8620",
                      "auth": "관리자",
                      "note": "해당 프로젝트 서버 관리"
                  },
                  "department": {
                      "code": "160000",
                      "name": "경찰청"
                  },
                  "division": {
                      "code": "160301",
                      "name": "시스템관리부"
                  }
              },
              "visibility": {
                  "경찰청": false,
                  "미래창조부": false,
                  "국민안전처": true
              }
          },
          {
              "id": "SVE_000046",
              "loaded": true,
              "style": {
                  "label": "방화벽",
                  "type": "firewall"
              },
              "properties": {
                  "type": "방화벽",
                  "hw_id": "SVE_000046",
                  "name": "방화벽",
                  "IP": "210.136.71.103",
                  "OS": "",
                  "location": "대전전산센터 2층",
                  "admin_id": "silee",
                  "admin_name": "이수일",
                  "department_code": "160000",
                  "division_code": "160301",
                  "admin": {
                      "id": "silee",
                      "name": "이수일",
                      "phone": "010-3999-8620",
                      "auth": "관리자",
                      "note": "해당 프로젝트 서버 관리"
                  },
                  "department": {
                      "code": "160000",
                      "name": "경찰청"
                  },
                  "division": {
                      "code": "160301",
                      "name": "시스템관리부"
                  }
              },
              "visibility": {
                  "경찰청": false,
                  "미래창조부": false,
                  "국민안전처": true
              }
          },
          {
              "id": "SVE_000047",
              "loaded": true,
              "style": {
                  "label": "스위치 허브",
                  "type": "switch-hub"
              },
              "properties": {
                  "type": "네트워크",
                  "hw_id": "SVE_000047",
                  "name": "스위치 허브",
                  "IP": "210.136.71.104",
                  "OS": "",
                  "location": "대전전산센터 2층",
                  "admin_id": "silee",
                  "admin_name": "이수일",
                  "department_code": "160000",
                  "division_code": "160301",
                  "admin": {
                      "id": "silee",
                      "name": "이수일",
                      "phone": "010-3999-8620",
                      "auth": "관리자",
                      "note": "해당 프로젝트 서버 관리"
                  },
                  "department": {
                      "code": "160000",
                      "name": "경찰청"
                  },
                  "division": {
                      "code": "160301",
                      "name": "시스템관리부"
                  }
              },
              "visibility": {
                  "경찰청": false,
                  "미래창조부": false,
                  "국민안전처": true
              }
          },
          {
              "id": "SVE_000048",
              "loaded": true,
              "style": {
                  "label": "입출고 서버",
                  "type": "server-store"
              },
              "properties": {
                  "type": "서버",
                  "hw_id": "SVE_000048",
                  "name": "입출고 서버",
                  "IP": "210.136.71.105",
                  "OS": "WINDOWS",
                  "location": "대전전산센터 2층",
                  "admin_id": "jdhong",
                  "admin_name": "홍길동",
                  "department_code": "160000",
                  "division_code": "160301",
                  "admin": {
                      "id": "jdhong",
                      "name": "홍길동",
                      "phone": "010-9890-2378",
                      "auth": "관리자",
                      "note": "해당 프로젝트 서버 관리"
                  },
                  "department": {
                      "code": "160000",
                      "name": "경찰청"
                  },
                  "division": {
                      "code": "160301",
                      "name": "시스템관리부"
                  }
              },
              "visibility": {
                  "경찰청": false,
                  "미래창조부": false,
                  "국민안전처": true
              }
          },
          {
              "id": "SVE_000049",
              "loaded": true,
              "style": {
                  "label": "통계 서버",
                  "type": "server-hack"
              },
              "properties": {
                  "type": "서버",
                  "hw_id": "SVE_000049",
                  "name": "통계 서버",
                  "IP": "210.136.71.106",
                  "OS": "HPUX",
                  "location": "대전전산센터 2층",
                  "admin_id": "jdhong",
                  "admin_name": "홍길동",
                  "department_code": "160000",
                  "division_code": "160301",
                  "admin": {
                      "id": "jdhong",
                      "name": "홍길동",
                      "phone": "010-9890-2378",
                      "auth": "관리자",
                      "note": "해당 프로젝트 서버 관리"
                  },
                  "department": {
                      "code": "160000",
                      "name": "경찰청"
                  },
                  "division": {
                      "code": "160301",
                      "name": "시스템관리부"
                  }
              },
              "visibility": {
                  "경찰청": false,
                  "미래창조부": false,
                  "국민안전처": true
              }
          },
          {
              "id": "SVE_000301",
              "loaded": true,
              "style": {
                  "label": "라우터",
                  "type": "router"
              },
              "properties": {
                  "type": "네트워크",
                  "hw_id": "SVE_000301",
                  "name": "라우터",
                  "IP": "210.136.71.102",
                  "OS": "",
                  "location": "대전전산센터 1층",
                  "admin_id": "silee",
                  "admin_name": "이수일",
                  "department_code": "160000",
                  "division_code": "160301",
                  "admin": {
                      "id": "silee",
                      "name": "이수일",
                      "phone": "010-3999-8620",
                      "auth": "관리자",
                      "note": "해당 프로젝트 서버 관리"
                  },
                  "department": {
                      "code": "160000",
                      "name": "경찰청"
                  },
                  "division": {
                      "code": "160301",
                      "name": "시스템관리부"
                  }
              },
              "visibility": {
                  "경찰청": true,
                  "미래창조부": false,
                  "국민안전처": false
              }
          },
          {
              "id": "SVE_000302",
              "loaded": true,
              "style": {
                  "label": "방화벽",
                  "type": "firewall"
              },
              "properties": {
                  "type": "방화벽",
                  "hw_id": "SVE_000302",
                  "name": "방화벽",
                  "IP": "210.136.71.103",
                  "OS": "",
                  "location": "대전전산센터 1층",
                  "admin_id": "bana",
                  "admin_name": "나보안",
                  "department_code": "130000",
                  "division_code": "130010",
                  "admin": {
                      "id": "bana",
                      "name": "나보안",
                      "phone": "02-4378-3422",
                      "auth": "관리자",
                      "note": "해당 보안장비 관리"
                  },
                  "department": {
                      "code": "130000",
                      "name": "국민안전처"
                  },
                  "division": {
                      "code": "130010",
                      "name": "재난방재부"
                  }
              },
              "visibility": {
                  "경찰청": true,
                  "미래창조부": false,
                  "국민안전처": false
              }
          },
          {
              "id": "SVE_000303",
              "loaded": true,
              "style": {
                  "label": "스위치 허브",
                  "type": "switch-hub"
              },
              "properties": {
                  "type": "네트워크",
                  "hw_id": "SVE_000303",
                  "name": "스위치 허브",
                  "IP": "210.136.71.104",
                  "OS": "",
                  "location": "대전전산센터 1층",
                  "admin_id": "silee",
                  "admin_name": "이수일",
                  "department_code": "160000",
                  "division_code": "160301",
                  "admin": {
                      "id": "silee",
                      "name": "이수일",
                      "phone": "010-3999-8620",
                      "auth": "관리자",
                      "note": "해당 프로젝트 서버 관리"
                  },
                  "department": {
                      "code": "160000",
                      "name": "경찰청"
                  },
                  "division": {
                      "code": "160301",
                      "name": "시스템관리부"
                  }
              },
              "visibility": {
                  "경찰청": true,
                  "미래창조부": false,
                  "국민안전처": false
              }
          },
          {
              "id": "SVE_000304",
              "loaded": true,
              "style": {
                  "label": "모니터링서버",
                  "type": "server-monitor"
              },
              "properties": {
                  "type": "서버",
                  "hw_id": "SVE_000304",
                  "name": "모니터링서버",
                  "IP": "210.136.71.105",
                  "OS": "WINDOWS",
                  "location": "대전전산센터 1층",
                  "admin_id": "jmil",
                  "admin_name": "일지매",
                  "department_code": "160000",
                  "division_code": "160301",
                  "admin": {
                      "id": "jmil",
                      "name": "일지매",
                      "phone": "010-9470-8657",
                      "auth": "관리자",
                      "note": "해당 프로젝트 서버 관리"
                  },
                  "department": {
                      "code": "160000",
                      "name": "경찰청"
                  },
                  "division": {
                      "code": "160301",
                      "name": "시스템관리부"
                  }
              },
              "visibility": {
                  "경찰청": true,
                  "미래창조부": false,
                  "국민안전처": false
              },
              "group": "160000-1"
          },
          {
              "id": "SVE_000305",
              "loaded": true,
              "style": {
                  "label": "CCTV영상서버",
                  "type": "server-cctv"
              },
              "properties": {
                  "type": "서버",
                  "hw_id": "SVE_000305",
                  "name": "CCTV영상서버",
                  "IP": "210.136.71.106",
                  "OS": "HPUX",
                  "location": "대전전산센터 1층",
                  "admin_id": "jmil",
                  "admin_name": "일지매",
                  "department_code": "160000",
                  "division_code": "160301",
                  "admin": {
                      "id": "jmil",
                      "name": "일지매",
                      "phone": "010-9470-8657",
                      "auth": "관리자",
                      "note": "해당 프로젝트 서버 관리"
                  },
                  "department": {
                      "code": "160000",
                      "name": "경찰청"
                  },
                  "division": {
                      "code": "160301",
                      "name": "시스템관리부"
                  }
              },
              "visibility": {
                  "경찰청": true,
                  "미래창조부": false,
                  "국민안전처": false
              },
              "group": "160000-1"
          },
          {
              "id": "SVE_000035",
              "loaded": true,
              "style": {
                  "label": "분석서버",
                  "type": "server-analysis"
              },
              "properties": {
                  "type": "서버",
                  "hw_id": "SVE_000035",
                  "name": "분석서버",
                  "IP": "210.136.71.107",
                  "OS": "HPUX",
                  "location": "대전전산센터 1층",
                  "admin_id": "jmil",
                  "admin_name": "일지매",
                  "department_code": "160000",
                  "division_code": "160301",
                  "admin": {
                      "id": "jmil",
                      "name": "일지매",
                      "phone": "010-9470-8657",
                      "auth": "관리자",
                      "note": "해당 프로젝트 서버 관리"
                  },
                  "department": {
                      "code": "160000",
                      "name": "경찰청"
                  },
                  "division": {
                      "code": "160301",
                      "name": "시스템관리부"
                  }
              },
              "visibility": {
                  "경찰청": true,
                  "미래창조부": false,
                  "국민안전처": false
              },
              "group": "160000-1"
          },
          {
              "id": "SVE_006040",
              "loaded": true,
              "style": {
                  "label": "라우터",
                  "type": "router"
              },
              "properties": {
                  "type": "네트워크",
                  "hw_id": "SVE_006040",
                  "name": "라우터",
                  "IP": "160.234.23.129",
                  "OS": "",
                  "location": "서울",
                  "admin_id": "silee",
                  "admin_name": "이수일",
                  "department_code": "160000",
                  "division_code": "160301",
                  "admin": {
                      "id": "silee",
                      "name": "이수일",
                      "phone": "010-3999-8620",
                      "auth": "관리자",
                      "note": "해당 프로젝트 서버 관리"
                  },
                  "department": {
                      "code": "160000",
                      "name": "경찰청"
                  },
                  "division": {
                      "code": "160301",
                      "name": "시스템관리부"
                  }
              },
              "visibility": {
                  "경찰청": false,
                  "미래창조부": true,
                  "국민안전처": false
              }
          },
          {
              "id": "SVE_006041",
              "loaded": true,
              "style": {
                  "label": "방화벽",
                  "type": "firewall"
              },
              "properties": {
                  "type": "방화벽",
                  "hw_id": "SVE_006041",
                  "name": "방화벽",
                  "IP": "160.234.23.130",
                  "OS": "",
                  "location": "서울",
                  "admin_id": "bana",
                  "admin_name": "나보안",
                  "department_code": "130000",
                  "division_code": "130010",
                  "admin": {
                      "id": "bana",
                      "name": "나보안",
                      "phone": "02-4378-3422",
                      "auth": "관리자",
                      "note": "해당 보안장비 관리"
                  },
                  "department": {
                      "code": "130000",
                      "name": "국민안전처"
                  },
                  "division": {
                      "code": "130010",
                      "name": "재난방재부"
                  }
              },
              "visibility": {
                  "경찰청": false,
                  "미래창조부": true,
                  "국민안전처": false
              }
          },
          {
              "id": "SVE_006042",
              "loaded": true,
              "style": {
                  "label": "스위치 허브",
                  "type": "switch-hub"
              },
              "properties": {
                  "type": "네트워크",
                  "hw_id": "SVE_006042",
                  "name": "스위치 허브",
                  "IP": "160.234.23.131",
                  "OS": "",
                  "location": "서울",
                  "admin_id": "silee",
                  "admin_name": "이수일",
                  "department_code": "160000",
                  "division_code": "160301",
                  "admin": {
                      "id": "silee",
                      "name": "이수일",
                      "phone": "010-3999-8620",
                      "auth": "관리자",
                      "note": "해당 프로젝트 서버 관리"
                  },
                  "department": {
                      "code": "160000",
                      "name": "경찰청"
                  },
                  "division": {
                      "code": "160301",
                      "name": "시스템관리부"
                  }
              },
              "visibility": {
                  "경찰청": false,
                  "미래창조부": true,
                  "국민안전처": false
              }
          },
          {
              "id": "SVE_006043",
              "loaded": true,
              "style": {
                  "label": "자동알람서버",
                  "type": "server-alarm"
              },
              "properties": {
                  "type": "서버",
                  "hw_id": "SVE_006043",
                  "name": "자동알람서버",
                  "IP": "160.234.23.132",
                  "OS": "LINUX",
                  "location": "서울",
                  "admin_id": "sslee",
                  "admin_name": "이순신",
                  "department_code": "150000",
                  "division_code": "150001",
                  "admin": {
                      "id": "sslee",
                      "name": "이순신",
                      "phone": "010-7492-6667",
                      "auth": "팀장",
                      "note": "미래창조과학부 시스템 전체 관리"
                  },
                  "department": {
                      "code": "150000",
                      "name": "미래창조과학부"
                  },
                  "division": {
                      "code": "150001",
                      "name": "민원처리부"
                  }
              },
              "visibility": {
                  "경찰청": false,
                  "미래창조부": true,
                  "국민안전처": false
              },
              "group": "150000-1"
          },
          {
              "id": "SVE_006044",
              "loaded": true,
              "style": {
                  "label": "홈페이지_web",
                  "type": "server-web"
              },
              "properties": {
                  "type": "서버",
                  "hw_id": "SVE_006044",
                  "name": "홈페이지_web",
                  "IP": "160.234.23.133",
                  "OS": "LINUX",
                  "location": "서울",
                  "admin_id": "sslee",
                  "admin_name": "이순신",
                  "department_code": "150000",
                  "division_code": "150001",
                  "admin": {
                      "id": "sslee",
                      "name": "이순신",
                      "phone": "010-7492-6667",
                      "auth": "팀장",
                      "note": "미래창조과학부 시스템 전체 관리"
                  },
                  "department": {
                      "code": "150000",
                      "name": "미래창조과학부"
                  },
                  "division": {
                      "code": "150001",
                      "name": "민원처리부"
                  }
              },
              "visibility": {
                  "경찰청": false,
                  "미래창조부": true,
                  "국민안전처": false
              },
              "group": "150000-1"
          },
          {
              "id": "SVE_006045",
              "loaded": true,
              "style": {
                  "label": "홈페이지_was",
                  "type": "server-was"
              },
              "properties": {
                  "type": "서버",
                  "hw_id": "SVE_006045",
                  "name": "홈페이지_was",
                  "IP": "160.234.23.134",
                  "OS": "LINUX",
                  "location": "서울",
                  "admin_id": "sslee",
                  "admin_name": "이순신",
                  "department_code": "150000",
                  "division_code": "150001",
                  "admin": {
                      "id": "sslee",
                      "name": "이순신",
                      "phone": "010-7492-6667",
                      "auth": "팀장",
                      "note": "미래창조과학부 시스템 전체 관리"
                  },
                  "department": {
                      "code": "150000",
                      "name": "미래창조과학부"
                  },
                  "division": {
                      "code": "150001",
                      "name": "민원처리부"
                  }
              },
              "visibility": {
                  "경찰청": false,
                  "미래창조부": true,
                  "국민안전처": false
              },
              "group": "150000-1"
          },
          {
              "id": "SVE_006046",
              "loaded": true,
              "style": {
                  "label": "홈페이지_db",
                  "type": "server-db"
              },
              "properties": {
                  "type": "서버",
                  "hw_id": "SVE_006046",
                  "name": "홈페이지_db",
                  "IP": "160.234.23.135",
                  "OS": "LINUX",
                  "location": "서울",
                  "admin_id": "sslee",
                  "admin_name": "이순신",
                  "department_code": "150000",
                  "division_code": "150001",
                  "admin": {
                      "id": "sslee",
                      "name": "이순신",
                      "phone": "010-7492-6667",
                      "auth": "팀장",
                      "note": "미래창조과학부 시스템 전체 관리"
                  },
                  "department": {
                      "code": "150000",
                      "name": "미래창조과학부"
                  },
                  "division": {
                      "code": "150001",
                      "name": "민원처리부"
                  }
              },
              "visibility": {
                  "경찰청": false,
                  "미래창조부": true,
                  "국민안전처": false
              },
              "group": "150000-1"
          }
      ],
      "links": [
          {
              "id": "link0",
              "from": "root",
              "to": "SVE_000017",
              "type": "type1"
          },
          {
              "id": "link1",
              "from": "root",
              "to": "SVE_000045",
              "type": "type1"
          },
          {
              "id": "link2",
              "from": "root",
              "to": "SVE_000301",
              "type": "type1"
          },
          {
              "id": "link3",
              "from": "root",
              "to": "SVE_006040",
              "type": "type1"
          },
          {
              "id": "link4",
              "from": "root",
              "to": "CCTV1",
              "type": "type1"
          },
          {
              "id": "link5",
              "from": "root",
              "to": "CCTV2",
              "type": "type1"
          },
          {
              "id": "link6",
              "from": "root",
              "to": "CCTV3",
              "type": "type1"
          },
          {
              "id": "link7",
              "from": "SVE_000017",
              "to": "SVE_000016",
              "type": "type1"
          },
          {
              "id": "link8",
              "from": "SVE_000016",
              "to": "SVE_000015",
              "type": "type1"
          },
          {
              "id": "link9",
              "from": "SVE_000015",
              "to": "SVE_000014",
              "type": "type1"
          },
          {
              "id": "link10",
              "from": "SVE_000014",
              "to": "SVE_000013",
              "type": "type1"
          },
          {
              "id": "link11",
              "from": "SVE_000013",
              "to": "SVE_000012",
              "type": "type1"
          },
          {
              "id": "link12",
              "from": "SVE_000012",
              "to": "SVE_000050",
              "type": "type1"
          },
          {
              "id": "link13",
              "from": "SVE_000045",
              "to": "SVE_000046",
              "type": "type1"
          },
          {
              "id": "link14",
              "from": "SVE_000046",
              "to": "SVE_000048",
              "type": "type1"
          },
          {
              "id": "link15",
              "from": "SVE_000048",
              "to": "SVE_000047",
              "type": "type1"
          },
          {
              "id": "link16",
              "from": "SVE_000047",
              "to": "SVE_000049",
              "type": "type1"
          },
          {
              "id": "link17",
              "from": "SVE_000049",
              "to": "SVE_000001",
              "type": "type1"
          },
          {
              "id": "link18",
              "from": "SVE_000001",
              "to": "SVE_000050",
              "type": "type1"
          },
          {
              "id": "link19",
              "from": "SVE_000050",
              "to": "SVE_000002",
              "type": "type1"
          },
          {
              "id": "link20",
              "from": "SVE_000050",
              "to": "SVE_000003",
              "type": "type1"
          },
          {
              "id": "link21",
              "from": "SVE_000050",
              "to": "SVE_000004",
              "type": "type1"
          },
          {
              "id": "link22",
              "from": "SVE_000050",
              "to": "SVE_000005",
              "type": "type1"
          },
          {
              "id": "link23",
              "from": "SVE_000050",
              "to": "SVE_000006",
              "type": "type1"
          },
          {
              "id": "link24",
              "from": "SVE_000050",
              "to": "SVE_000007",
              "type": "type1"
          },
          {
              "id": "link25",
              "from": "SVE_000050",
              "to": "SVE_000009",
              "type": "type1"
          },
          {
              "id": "link26",
              "from": "SVE_000050",
              "to": "SVE_000008",
              "type": "type1"
          },
          {
              "id": "link27",
              "from": "SVE_000008",
              "to": "SVE_000010",
              "type": "type1"
          },
          {
              "id": "link28",
              "from": "SVE_000008",
              "to": "SVE_000011",
              "type": "type1"
          },
          {
              "id": "link29",
              "from": "SVE_000301",
              "to": "SVE_000302",
              "type": "type1"
          },
          {
              "id": "link30",
              "from": "SVE_000302",
              "to": "SVE_000303",
              "type": "type1"
          },
          {
              "id": "link31",
              "from": "SVE_000303",
              "to": "SVE_000035",
              "type": "type1"
          },
          {
              "id": "link32",
              "from": "SVE_000303",
              "to": "SVE_000304",
              "type": "type1"
          },
          {
              "id": "link33",
              "from": "SVE_000303",
              "to": "SVE_000305",
              "type": "type1"
          },
          {
              "id": "link34",
              "from": "SVE_006040",
              "to": "SVE_006041",
              "type": "type1"
          },
          {
              "id": "link35",
              "from": "SVE_006041",
              "to": "SVE_006042",
              "type": "type1"
          },
          {
              "id": "link36",
              "from": "SVE_006042",
              "to": "SVE_006043",
              "type": "type1"
          },
          {
              "id": "link37",
              "from": "SVE_006042",
              "to": "SVE_006044",
              "type": "type1"
          },
          {
              "id": "link38",
              "from": "SVE_006042",
              "to": "SVE_006045",
              "type": "type1"
          },
          {
              "id": "link39",
              "from": "SVE_006042",
              "to": "SVE_006046",
              "type": "type1"
          }
      ]
  }
};

module.exports = AppSettings;