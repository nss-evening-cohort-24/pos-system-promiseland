import { createOrder, getOrder, updateOrder } from "../../api/orderData";
import { showOrder } from "../../pages/order";


const formEvents = (user) => {
    document.querySelector('#form-container').addEventListener('create/edit', (e) => {
        e.preventDefault();
        if (e.target.id.includes('#create-order')) {
            const payload = {
                customerName: document.querySelector('#customerName').value,
                orderType: document.querySelector('#orderType').value,
                email: document.querySelector('#email').value,
                phoneNumber: document.querySelector('#phoneNumber').value,
                orderType: document.querySelector('#orderType').value,
                uid: `${user.uid}`,
            };

            createOrder(payload).then(({ customerName }) => {
                const patchPayload = { firebaseKey: customerName };

                updateOrder(patchPayload).then(() => {
                    getOrder(user.uid).then(showOrder);
                });
            });
        }
        if (e.target.id.includes('update-order')) {
            const [, firebaseKey] = e.target.id.split('--');
            const payload = {
                customerName: document.querySelector('#customerName').value,
                orderType: document.querySelector('#orderType').value,
                email: document.querySelector('#email').value,
                phoneNumber: document.querySelector('#phoneNumber').value,
                orderType: document.querySelector('#orderType').value,
                firebaseKey,
            };

            updateOrder(payload).then(() => {
                getOrder(user.uid).then(showOrder);
            });
        }

    });
}

export default formEvents;