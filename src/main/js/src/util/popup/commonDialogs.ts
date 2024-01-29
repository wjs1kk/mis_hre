import { openModal } from "@/util/popup/modal";
import Alert from "@/components/popup/AlertBase.vue";
import Confirm from "@/components/popup/ConfirmBase.vue";
import Prompt from "@/components/popup/PromptBase.vue";

/**
 * 알림 메시지 팝업을 표시한다.
 *
 * @param message 메시지
 */
export async function showAlert(message: string): Promise<void> {
    await openModal(Alert, {
        props: {
            message
        }
    });
}

/**
 * 확인 팝업을 표시한다.
 *
 * @param message 메시지 내용
 * @returns 사용자가 확인을 선택한 경우 true, 취소를 선택한 경우 false를 반환하는 {@link Promise}
 */
export async function showConfirm(message: string): Promise<boolean> {
    return await openModal<boolean>(Confirm, {
        props: {
            message
        }
    });
}

/**
 * 텍스트 입력 팝업을 표시한다.
 *
 * @param message 메시지 내용
 * @param defaultValue 기본값
 * @param inputType 입력란 유형
 *
 * @returns 사용자가 입력한 문자열을 반환하는 {@link Promise}
 */
export async function showPrompt(message: string, defaultValue: string = "", inputType: "text" | "password" = "text"): Promise<string> {
    return await openModal<string>(Prompt, {
        props: {
            message,
            value: defaultValue,
            type: inputType
        }
    });
}

type AddressPopupResult = { canceled?: boolean; address: daum.IPostcodeData; };

export async function showAddressSearchPopup(query?: string) {
    return await openModal<AddressPopupResult>(import("@/pages/common/AddressSearchPopup.vue"), {
        props: {
            query
        }
    });
}
