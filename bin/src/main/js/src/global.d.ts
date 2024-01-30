declare type Predicate<T> = (input: T) => boolean;
declare type Consumer<T> = (input: T) => void;
declare type Supplier<T> = () => T;

declare namespace daum {

    declare type AddressType = "R" | "J";
    declare type YesNo = "Y" | "N";

    declare type AddressLanguage = "K" | "E";

    declare interface IPostcodeData {

        /**
         * 국가기초구역번호. 2015년 8월 1일부터 시행될 새 우편번호.
         *
         * @example "13529"
         */
        zonecode: string;

        /**
         * 기본 주소
         *
         * (검색 결과에서 첫줄에 나오는 주소, 검색어의 타입(지번/도로명)에 따라 달라집니다.)
         *
         * @example "경기 성남시 분당구 판교역로 166"
         */
        address: string;

        /**
         * 기본 영문 주소
         *
         * @example "166, Pangyoyeok-ro, Bundang-gu, Seongnam-si, Gyeonggi-do, Korea"
         */
        addressEnglish: string;

        /**
         * 검색된 기본 주소 타입: R(도로명), J(지번)
         */
        addressType: AddressType;

        /**
         * 검색 결과에서 사용자가 선택한 주소의 타입
         */
        userSelectedType: AddressType;

        /**
         * 연관 주소에서 "선택 안함" 부분을 선택했을 때를 구분할 수 있는 상태 변수
         */
        noSelected: YesNo;

        /**
         * 검색 결과에서 사용자가 선택한 주소의 언어 타입: K(한글주소), E(영문주소)
         */
        userLanguageType: AddressLanguage;

        /**
         * 도로명 주소
         *
         * (지번:도로명 주소가 1:N인 경우에는 데이터가 공백으로 들어갈 수 있습니다. - 아래 autoRoadAddress의 자세한
         * 설명 참고)
         *
         * @example "경기 성남시 분당구 판교역로 166"
         *
         * @see https://postcode.map.daum.net/guide
         */
        roadAddress: string;

        /**
         * 영문 도로명 주소
         *
         * @example "166, Pangyoyeok-ro, Bundang-gu, Seongnam-si, Gyeonggi-do, Korea"
         */
        roadAddressEnglish: string;

        /**
         * 지번 주소
         *
         * (도로명:지번 주소가 1:N인 경우에는 데이터가 공백으로 들어갈 수 있습니다. - 아래 autoJibunAddress의 자세한
         * 설명 참고)
         *
         * @example "경기 성남시 분당구 백현동 532"
         *
         * @see https://postcode.map.daum.net/guide
         */
        jibunAddress: string;

        /**
         * 영문 지번 주소
         *
         * @example "532, Baekhyeon-dong, Bundang-gu, Seongnam-si, Gyeonggi-do, Korea"
         */
        jibunAddressEnglish: string;

        /**
         * '지번주소'에 매핑된 '도로명주소'가 여러개인 경우, 사용자가 '선택안함' 또는 '지번주소'를 클릭했을 때 연관된
         * 도로명 주소 중 임의로 첫번째 매핑 주소를 넣어서 반환합니다.
         *
         * (autoMapping을 false로 설정한 경우에는 값이 채워지지 않습니다.)
         *
         * @example "경기 성남시 분당구 판교역로 166"
         */
        autoRoadAddress: string;

        /**
         * [autoRoadAddress]{@link daum.IPostcodeData#autoRoadAddress}의 영문 도로명 주소
         *
         * @example "166, Pangyoyeok-ro, Bundang-gu, Seongnam-si, Gyeonggi-do, Korea"
         */
        autoRoadAddressEnglish: string;

        /**
         * '도로명주소'에 매핑된 '지번주소'가 여러개인 경우, 사용자가 '선택안함' 또는 '도로명주소'를 클릭했을 때 연관된
         * 지번 주소 중 임의로 첫번째 매핑 주소를 넣어서 반환합니다.
         *
         * (autoMapping을 false로 설정한 경우에는 값이 채워지지 않습니다.)
         *
         * @example "경기 성남시 분당구 백현동 532"
         */
        autoJibunAddress: string;

        /**
         * [autoJibunAddress]{@link daum.IPostcodeData#autoJibunAddress}의 영문 도로명 주소
         *
         * @example "166, Pangyoyeok-ro, Bundang-gu, Seongnam-si, Gyeonggi-do, Korea"
         */
        autoJibunAddressEnglish: string;

        /**
         * 건물관리번호
         *
         * @example "4113511000105320000000002"
         */
        buildingCode: string;

        /**
         * 건물명
         *
         * @example "카카오 판교 아지트"
         */
        buildingName: string;

        /**
         * 공동주택 여부
         *
         * (아파트,연립주택,다세대주택 등)
         */
        apartment: YesNo;

        /**
         * 도/시 이름
         *
         * @example "경기"
         */
        sido: string;

        /**
         * 도/시 이름의 영문
         *
         * @example "Gyeonggi-do"
         */
        sidoEnglish: string;

        /**
         * 시/군/구 이름
         *
         * @example "성남시 분당구"
         */
        sigungu: string;

        /**
         * 시/군/구 이름의 영문
         *
         * @example "Bundang-gu Seongnam-si"
         */
        sigunguEnglish: string;

        /**
         * 시/군/구 코드
         *
         * (5자리 구성된 시/군/구 코드입니다.)
         *
         * @example "41135"
         */
        sigunguCode: string;

        /**
         * 도로명 코드, 7자리로 구성된 도로명 코드입니다. 추후 7자리 이상으로 늘어날 수 있습니다.
         *
         * @example "3179025"
         */
        roadnameCode: string;

        /**
         * 법정동/법정리 코드
         *
         * @example "4113511000"
         */
        bcode: string;

        /**
         * 도로명 값, 검색 결과 중 선택한 도로명주소의 "도로명" 값이 들어갑니다.(건물번호 제외)
         *
         * @example "판교역로"
         */
        roadname: string;

        /**
         * 도로명 값, 검색 결과 중 선택한 도로명주소의 "도로명의 영문" 값이 들어갑니다.(건물번호 제외)
         *
         * @example "Pangyoyeok-ro"
         */
        roadnameEnglish: string;

        /**
         * 법정동/법정리 이름
         *
         * @example "백현동"
         */
        bname: string;

        /**
         * 법정동/법정리 이름의 영문
         *
         * @example "Baekhyeon-dong"
         */
        bnameEnglish: string;

        /**
         * 법정리의 읍/면 이름
         *
         * ("동"지역일 경우에는 공백, "리"지역일 경우에는 "읍" 또는 "면" 정보가 들어갑니다.)
         *
         * @example ""
         */
        bname1: string;

        /**
         * 법정리의 읍/면 이름의 영문
         *
         * ("동"지역일 경우에는 공백, "리"지역일 경우에는 "읍" 또는 "면" 정보가 들어갑니다.)
         *
         * @example ""
         */
        bname1English: string;

        /**
         * 법정동/법정리 이름
         *
         * @example "백현동"
         */
        bname2: string;

        /**
         * 법정동/법정리 이름의 영문
         *
         * @example "Baekhyeon-dong"
         */
        bname2English: string;

        /**
         * 행정동 이름, 검색어를 행정동으로 검색하고, 검색결과의 법정동과 검색어에 입력한 행정동과 다른 경우에 표시하고,
         * 데이터를 내립니다.
         */
        hname: string;

        /**
         * 사용자가 입력한 검색어
         */
        query: string;

        /**
         * 구 우편번호 (2020년 3월 9일 이후로는 데이터가 내려가지 않습니다.)
         *
         * @deprecated
         */
        postcode: string;

        /**
         * 구 우편번호 앞 3자리 (2020년 3월 9일 이후로는 데이터가 내려가지 않습니다.)
         *
         * @deprecated
         */
        postcode1: string;

        /**
         * 구 우편번호 뒤 3자리 (2020년 3월 9일 이후로는 데이터가 내려가지 않습니다.)
         *
         * @deprecated
         */
        postcode2: string;

        /**
         * 구 우편번호 일련번호 (2020년 3월 9일 이후로는 데이터가 내려가지 않습니다.)
         *
         * @deprecated
         */
        postcodeSeq: string;
    }

    declare interface IPostcodeSize {

        /**
         * 검색 결과 화면 넓이
         *
         * @example 500
         */
        width: number;

        /**
         * 검색 결과 화면 높이
         *
         * @example 772
         */
        height: number;
    }

    declare interface IPostcodeSearch {

        /**
         * 검색창에 입력된 검색어
         *
         * @example "판교역로 166"
         */
        q: string;

        /**
         * 검색결과의 총 갯수
         *
         * @example 1
         */
        count: number;
    }

    declare interface IPostcodeTheme {

        /**
         * 바탕 배경색
         */
        bgColor?: string;

        /**
         * 검색창 배경색
         */
        searchBgColor?: string;

        /**
         * 본문 배경색(검색결과,결과없음,첫화면,검색서제스트)
         */
        contentBgColor?: string;

        /**
         * 페이지 배경색
         */
        pageBgColor?: string;

        /**
         * 기본 글자색
         */
        textColor?: string;

        /**
         * 검색창 글자색
         */
        queryTextColor?: string;

        /**
         * 우편번호 글자색
         */
        postcodeTextColor?: string;

        /**
         * 강조 글자색
         */
        emphtextColor?: string;

        /**
         * 테두리
         */
        outlineColor?: string;
    }

    declare interface IPostcodeInit {

        /**
         * 우편번호 검색 결과 목록에서 특정 항목을 클릭한 경우, 해당 정보를 받아서 처리할 콜백 함수를 정의하는
         * 부분입니다.(null값 또는 정의하지 않을 시에 검색은 가능하지만, 결과 항목을 클릭하면 아무 일도 일어나지
         * 않습니다.)
         *
         * 이 함수를 정의할때 넣는 인자에는 우편번호 검색 결과 목록에서 사용자가 클릭한 주소 정보가 들어가게 됩니다.
         *
         * @param data
         *
         * @example
         * new daum.Postcode({
         *     oncomplete: function(data) {
         *         //data는 사용자가 선택한 주소 정보를 담고 있는 객체이며, 상세 설명은 아래 목록에서 확인하실 수 있습니다.
         *     }
         * });
         */
        oncomplete?(data: IPostcodeData): void;

        /**
         * 검색 결과로 인해 우편번호 서비스의 화면 크기가 변한 경우, 화면 크기 정보를 받아서 처리할 콜백 함수를 정의하는
         * 부분입니다.
         *
         * size 파라미터의 width의 경우 외부 wrapper DOM의 크기에 영향을 받기 때문에, 최초 렌더링 값으로 유지되며,
         * height 값은 수시로 변하기 때문에 이 height 값을 이용하고자 할때 사용하시는 것을 추천드립니다.(open() 함수를
         * 이용한 팝업모드에서는 지원하지 않습니다.)
         *
         * 만약 임의로 우편번호서비스의 크기를 변하게 하고 싶으실 경우엔 해당 콜백함수보다 직접 정의한 함수를 통하거나
         * 외부 resize/orientation 이벤트를 통해 wrapper DOM의 크기를 직접 변경 하시는 것을 추천드립니다.
         *
         * @param size
         *
         * @example
         * new daum.Postcode({
         *     onresize: function(size) {
         *         //size는 우편번호 찾기 화면의 크기 데이터 객체이며, 상세 설명은 아래 목록에서 확인하실 수 있습니다.
         *     }
         * })
         */
        onresize?(size: IPostcodeSize): void;

        /**
         * 우편번호 찾기 화면을 팝업으로 띄운 후, 검색 결과를 선택하거나, 브라우저의 닫기버튼을 통해 닫았을 때 발생하는
         * 콜백 함수를 정의하는 부분입니다. 이 중 검색결과를 선택한 경우에는 onComplete콜백함수가 완료된 후에 실행되게
         * 됩니다.
         *
         * 이 함수를 정의할때 넣는 인자에는 우편번호 찾기 화면이 어떻게 닫혔는지에 대한 상태 변수가 들어가게 됩니다.
         *
         * (embed() 함수를 이용한 레이어모드에서는 "검색결과를 선택하여 닫힌 경우"에만 실행됩니다.)
         *
         * @param state
         * * "FORCE_CLOSE": 브라우저의 닫기 버튼을 통해 화면이 닫혔을 경우 (레이어모드에서는 발생하지 않습니다.)
         * * "COMPLETE_CLOSE": 검색결과를 선택하여 화면이 닫혔을 경우 (팝업/레이어모드의 기본 동작입니다.)
         *
         * @example
         * new daum.Postcode({
         *     onclose: function(state) {
         *         //state는 우편번호 찾기 화면이 어떻게 닫혔는지에 대한 상태 변수 이며, 상세 설명은 아래 목록에서 확인하실 수 있습니다.
         *         if(state === 'FORCE_CLOSE'){
         *             //사용자가 브라우저 닫기 버튼을 통해 팝업창을 닫았을 경우, 실행될 코드를 작성하는 부분입니다.
 *
         *         } else if(state === 'COMPLETE_CLOSE'){
         *             //사용자가 검색결과를 선택하여 팝업창이 닫혔을 경우, 실행될 코드를 작성하는 부분입니다.
         *             //oncomplete 콜백 함수가 실행 완료된 후에 실행됩니다.
         *         }
         *     }
         * });
         */
        onclose?(state: "FORCE_CLOSE" | "COMPLETE_CLOSE"): void;

        /**
         * 주소를 검색할 경우에 실행되는 콜백함수입니다. onresize콜백보다 먼저 실행되며, 검색어와 검색결과에 대한 간단한
         * 정보가 콜백함수의 인자로 넘어가게 됩니다.
         *
         * @param data
         *
         * @example
         * new daum.Postcode({
         *     onsearch: function(data) {
         *         //data는 검색결과에 대한 검색어와 갯수를 가지고 있는 데이터 객체입니다.
         *     }
         * });
         */
        onsearch?(data: IPostcodeSearch): void;

        /**
         * 우편번호 찾기 팝업 또는 iframe의 고정 넓이를 지정합니다. 기본값은 500이며 iframe으로 띄울 경우 비율(%)로도
         * 입력이 가능합니다. 최소값은 300이며 이보다 작은 값을 넣으면 무시됩니다.
         *
         * @default 500
         */
        width?: number | `${number}%`;

        /**
         * 우편번호 찾기 팝업 또는 iframe의 고정 높이를 지정합니다. 기본값은 500이며 iframe으로 띄울 경우 비율(%)로도
         * 입력이 가능합니다. 최소값은 400이며 이보다 작은 값을 넣으면 무시됩니다.
         *
         * @default 400
         */
        height?: number | `${number}%`;

        /**
         * 우편번호 찾기 화면에서 애니메이션 효과를 줍니다. 기본값은 false로 설정되어 있습니다.
         *
         * @default false
         */
        animation?: boolean;

        /**
         * 우편번호 찾기가 실행된 후 검색어 입력박스에 focus를 줍니다. 단, PC 플랫폼에서만 동작하며 Mobile 플랫폼은
         * 지원하지 않습니다. (기본값 true)
         *
         * 추가로 focus의 경우 여러 환경적 요인으로 제대로 동작하지 않을 수도 있으니 참고 부탁드립니다.
         *
         * @default true
         */
        focusInput?: boolean;

        /**
         * 각각의 기본값은 true로 설정되어 있으며, 매핑된 주소가 여러개일 경우 사용자가 '선택 안함'을 클릭할 수 있도록
         * 합니다. 또한 연관주소를 선택하지 않고 메인주소를 선택하더라도 연관주소 중 첫번째 항목이 자동으로 데이터에
         * 들어가게 됩니다. 데이터는 oncomplete 인자 중 autoRoadAddress 또는 autoJibunAddress 항목에 첫번째 매핑 주소가
         * 들어갑니다.
         *
         * false로 설정을 하면 '선택 안함'이라는 항목이 노출되지 않고, 사용자가 반드시 매핑된 주소들 중 하나를
         * 선택하도록 할 수도 있습니다. 하지만, 매핑된 주소를 정확히 모르는 사용자에게는 불편을 줄 수 있고, 1:N, M:N
         * 관계의 주소에서는 메인주소가 선택이 되지 않기 때문에, 가급적 사용하지 않기를 권장합니다.
         *
         * (위 두 옵션을 같은 값으로 설정하는 방법은 각각의 옵션값을 직접 명시하거나 또는 autoMapping: true/false 로
         * 셋팅하면 두 옵션을 같은 값으로 설정 가능합니다.)
         *
         * @default true
         */
        autoMappingRoad?: boolean;

        /**
         * 각각의 기본값은 true로 설정되어 있으며, 매핑된 주소가 여러개일 경우 사용자가 '선택 안함'을 클릭할 수 있도록
         * 합니다. 또한 연관주소를 선택하지 않고 메인주소를 선택하더라도 연관주소 중 첫번째 항목이 자동으로 데이터에
         * 들어가게 됩니다. 데이터는 oncomplete 인자 중 autoRoadAddress 또는 autoJibunAddress 항목에 첫번째 매핑 주소가
         * 들어갑니다.
         *
         * false로 설정을 하면 '선택 안함'이라는 항목이 노출되지 않고, 사용자가 반드시 매핑된 주소들 중 하나를
         * 선택하도록 할 수도 있습니다. 하지만, 매핑된 주소를 정확히 모르는 사용자에게는 불편을 줄 수 있고, 1:N, M:N
         * 관계의 주소에서는 메인주소가 선택이 되지 않기 때문에, 가급적 사용하지 않기를 권장합니다.
         *
         * (위 두 옵션을 같은 값으로 설정하는 방법은 각각의 옵션값을 직접 명시하거나 또는 autoMapping: true/false 로
         * 셋팅하면 두 옵션을 같은 값으로 설정 가능합니다.)
         *
         * @default true
         */
        autoMappingJibun?: boolean;

        /**
         * 각각의 기본값은 true로 설정되어 있으며, 매핑된 주소가 여러개일 경우 사용자가 '선택 안함'을 클릭할 수 있도록
         * 합니다. 또한 연관주소를 선택하지 않고 메인주소를 선택하더라도 연관주소 중 첫번째 항목이 자동으로 데이터에
         * 들어가게 됩니다. 데이터는 oncomplete 인자 중 autoRoadAddress 또는 autoJibunAddress 항목에 첫번째 매핑 주소가
         * 들어갑니다.
         *
         * false로 설정을 하면 '선택 안함'이라는 항목이 노출되지 않고, 사용자가 반드시 매핑된 주소들 중 하나를
         * 선택하도록 할 수도 있습니다. 하지만, 매핑된 주소를 정확히 모르는 사용자에게는 불편을 줄 수 있고, 1:N, M:N
         * 관계의 주소에서는 메인주소가 선택이 되지 않기 때문에, 가급적 사용하지 않기를 권장합니다.
         *
         * (위 두 옵션을 같은 값으로 설정하는 방법은 각각의 옵션값을 직접 명시하거나 또는 **autoMapping: true/false**
         * 로 셋팅하면 두 옵션을 같은 값으로 설정 가능합니다.)
         *
         * @default true
         */
        autoMapping?: boolean;

        /**
         * 검색된 주소와 내려가는 데이터의 '시','도' 부분을 축약 표시합니다(한글 주소만 해당). 기본값은 true로 설정되어
         * 있습니다.
         *
         * (서울특별시 -> 서울, 광주광역시 -> 광주, 전라북도 -> 전북, 단, '세종특별자치시' '제주특별자치도'는 지자체의
         * 요청에 의해 제외)
         *
         * @default true
         */
        shorthand?: boolean;

        /**
         * 검색결과가 많을시 검색바 아래의 가이드 영역을 강조시켜 주는 기능입니다. 기본값은 0(비활성)입니다.
         *
         * 가이드 문구는 첫화면의 가이드 문구와 동일하며, 조합방식과 예시를 설명하여 사용자에게 재검색을 유도할 수
         * 있도록 하는 기능입니다.
         *
         * 입력값으로는 페이지 넘버가 들어가게 되며, **3~20**까지 입력 가능합니다.
         *
         * (ex. '5' 입력시 검색결과가 5페이지 이상일 경우 무조건 가이드 문구를 강조하게 됩니다. 그 이하에서는 아무런
         * 변화 없습니다.)
         *
         * @default 0
         */
        pleaseReadGuide?: number;

        /**
         * pleaseReadGuide 옵션과 같이 사용되는 옵션으로 **선택사항**입니다. 기본값은 1.5(1.5초간 강조)이며 입력하지
         * 않으면 기본값으로 동작합니다.
         *
         * 입력값 설정 단위는 '초'단위로 설정할 수 있으며, **0.1~60**까지 입력 가능합니다.
         *
         * (너무 높은 값을 설정하면, 해당 시간이 지나기 전까지 검색결과 영역을 조작할 수 없으니 유의하시기 바랍니다.)
         *
         * @default 1.5
         */
        pleaseReadGuideTimer?: number;

        /**
         * 검색어 입력시 검색바 아래에 뜨는 서제스트의 최대 검색 갯수를 조절할 수 있는 옵션입니다. 기본값은 10개이며
         * 입력하지 않거나 1~10을 벗어나는 수를 입력시 기본값으로 셋팅됩니다.
         *
         * @default 10
         */
        maxSuggestItems?: number;

        /**
         * 기본값은 false이며 기존보다 행정동 정보를 좀 더 많이 보여주게 하는 옵션입니다.
         *
         * 해당 기능을 활성화 하면 **검색 결과의 행정동과 법정동이 다른 경우 무조건 표시를 하고 데이터를 내리게
         * 됩니다.** 그래서 법정동과 행정동이 같은 경우에는 표시하지 않으며, 데이터 또한 내리지 않습니다.
         *
         * 추가적으로, 행정동 표시의 기본 로직은 "**검색어를 행정동으로 검색**하고, 검색결과의 **법정동과 검색어에
         * 입력한 행정동과 다른 경우**에 표시하고, 데이터를 내립니다."
         *
         * @default false
         */
        showMoreHName?: boolean;

        /**
         * 기본값은 둘다 false이며 검색 결과의 "영문보기", "지도" 버튼을 가릴 수 있는 옵션입니다. 다만, 해당 기능은
         * **자신의 주소에 익숙하지 못한 사용자들에 도움을 주는 기능**으로, app에 임베딩을 해야되는 상황이거나 버튼이
         * 눌러지면 안되는 상황일때 **선택적**으로 이용하시는 것을 권장합니다.
         *
         * hideMapBtn의 경우 true로 셋팅을 하면 검색결과가 없을때 나오는 안내(Tip) 페이지내의 지도 이동 링크도 같이
         * 사라집니다.
         *
         * @default false
         */
        hideMapBtn?: boolean;

        /**
         * 기본값은 둘다 false이며 검색 결과의 "영문보기", "지도" 버튼을 가릴 수 있는 옵션입니다. 다만, 해당 기능은
         * **자신의 주소에 익숙하지 못한 사용자들에 도움을 주는 기능**으로, app에 임베딩을 해야되는 상황이거나 버튼이
         * 눌러지면 안되는 상황일때 **선택적**으로 이용하시는 것을 권장합니다.
         *
         * hideMapBtn의 경우 true로 셋팅을 하면 검색결과가 없을때 나오는 안내(Tip) 페이지내의 지도 이동 링크도 같이
         * 사라집니다.
         *
         * @default false
         */
        hideEngBtn?: boolean;

        /**
         * 기본값은 false이며 검색 결과의 한글과 영문 주소를 동시에 볼 수 있게 해주는 기능입니다, 해당 기능 활성화시
         * "영문보기" 버튼은 감춰집니다.
         *
         * (hideEngBtn 속성의 설정 값보다 우선시 됩니다.)
         *
         * @default false
         */
        alwaysShowEngAddr?: boolean;

        /**
         * 기본값은 true이며 "form submit" 방식을 사용합니다. false로 설정 시 "location replace" 방식을 사용하게 됩니다.
         * 우편번호 서비스로 인해 history 관련 제어가 어려우실 경우 false로 설정하여 이용하시기 바랍니다.
         *
         * @default true
         */
        submitMode?: boolean;

        /**
         * 기본값은 true이며 하단 배너에 "가이드페이지"로 이동하는 링크를 활성화 시킵니다. 링크로 인해 사용성이
         * 저하된다고 생각하신다면 false로 설정하여 이용하시기 바랍니다.
         *
         * @default true
         */
        useBannerLink?: boolean;

        /**
         * 기본값은 true이며 검색 결과에서 구우편번호(6자리)를 모두 보이지 않게 합니다. 구우편번호가 더이상 업데이트가
         * 되지 않기 때문에, 추후 완전히 제거가 되기전까지 구우편번호를 가리고 싶으신 분들만 사용하시면 됩니다.
         *
         * (주소 선택시 내려가는 데이터는 변동사항이 없으며, 해당 옵션은 추후 기본값이 변경될 수 있습니다.)
         *
         * @default true
         *
         * @deprecated 2020년 3월 9일 이후 삭제
         */
        zonecodeOnly?: boolean;

        /**
         * 우편번호 찾기 화면의 색상 테마를 변경할 수 있습니다. 기본값은 null이며 자세한 사용법은 아래
         * ["테마 변경 마법사"]{@linkplain https://postcode.map.daum.net/guide#themeWizard}를 참고해 주세요.
         *
         * @default null
         *
         * @example
         * //테마변경은 생성자 옵션 중, theme변수에 객체 형태로 넣으시면 됩니다.
         * new daum.Postcode({
         *     oncomplete: function(data){...},
         *     theme: {
         *         searchBgColor: "#0B65C8", //검색창 배경색
         *         queryTextColor: "#FFFFFF" //검색창 글자색
         *     }
         * }).open();//or embed(target) - 테마변경은 팝업형, 레이어형 구분 없이 모두 이용가능합니다.
         */
        theme?: IPostcodeTheme | null;
    }

    declare interface IPostcodeOpenParam {

        /**
         * 검색어
         */
        q?: string;

        /**
         * 팝업 위치 x값
         */
        left?: number;

        /**
         * 팝업 위치 y값
         */
        top?: number;

        /**
         * 팝업 창의 타이틀
         */
        popupTitle?: string;

        /**
         * 팝업 창 구분값
         */
        popupKey?: string;

        /**
         * 자동 닫힘 유무
         */
        autoClose?: boolean;
    }

    declare interface IPostcodeEmbedParam {

        /**
         * 검색어
         */
        q?: string;

        /**
         * 자동 닫힘 유무
         */
        autoClose?: boolean;
    }

    declare class Postcode {

        constructor(options: IPostcodeInit);

        /**
         * 우편번호 찾기 화면을 팝업으로 띄웁니다.
         *
         * 특정 검색어를 넘겨 바로 실행할 수 있으며, 팝업의 위치를 지정할 수 있습니다.
         *
         * 또한 팝업의 이름을 설정하여, 여러개의 팝업이 뜨는 것을 방지할 수 있습니다.(IE7이하 에서는 동작하지 않습니다.)
         *
         * 우편번호 서비스의 기본동작은 검색결과 선택 후 자동 닫힘이나 autoClose옵션을 통해 이를 제어할 수 있습니다.
         *
         * @param options
         */
        open(options?: IPostcodeOpenParam): void;

        /**
         * 우편번호 찾기 화면을 iframe으로 삽입합니다. 이때 iframe을 삽입할 element를 첫번째 매개변수로 넘겨주어야
         * 합니다.
         *
         * 특정 검색어를 넘겨 바로 실행할 수도 있습니다.
         *
         * 우편번호 서비스의 기본동작은 검색결과 선택 후 자동 닫힘이나 autoClose옵션을 통해 이를 제어할 수 있습니다.
         *
         * @param element
         * @param options
         */
        embed(element: Element, options?: IPostcodeEmbedParam): void;
    }
}
