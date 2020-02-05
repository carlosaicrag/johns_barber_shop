export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';
export const CHANGE_MODAL = 'CHANGE_MODAL'

export const openModal = (modal, url) => {
    if (!url) {
        url = ""
    }
    return ({
        type: OPEN_MODAL,
    })
}

export const closeModal = () => {
    return {
        type: CLOSE_MODAL
    }
}
