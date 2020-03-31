export const OPEN_NAV_MODAL = 'OPEN_NAV_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';
export const CHANGE_MODAL = 'CHANGE_MODAL';
export const REMINDER_MODAL = 'REMINDER_MODAL';

export const openModal = (modal, url) => {
    if (!url) {
        url = ""
    }
    return ({
        type: OPEN_NAV_MODAL,
    })
};

export const closeModal = () => {
    return {
        type: CLOSE_MODAL
    }
};

export const reminderModal = () => {
    return {
        type: REMINDER_MODAL
    }
};