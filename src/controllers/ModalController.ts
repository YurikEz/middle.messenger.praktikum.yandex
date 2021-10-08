import { store } from '../store';
import { modalOpen, modalClose } from '../store/modal';

export interface ModalProps {
  active: boolean,
  title: string,
  data: {
    [key: string]: unknown,
  },
}

class ModalController {
  constructor() {}

  modalOpen(payload: ModalProps) {
    store.dispatch(modalOpen(payload));
  }

  modalClose() {
    store.dispatch(modalClose());
  }
}

export default new ModalController();