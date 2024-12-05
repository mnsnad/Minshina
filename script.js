// Функция для валидации формы "Отправка заказа"
function validateOrderForm() {
    var nameInput = document.querySelector('.usluga input[type="text"]');
    var phoneInput = document.querySelector('.usluga input[type="tel"]');
    var serviceSelect = document.querySelector('.usluga select[name="product"]');
    var deliveryDateInput = document.querySelector('.usluga input[name="deliveryDate"]');

    // Проверка поля имени
    if (nameInput.value.trim() === '') {
        alert('Введите ваше имя');
        nameInput.focus();
        return false;
    }

    // Проверка поля телефона
    if (!/^\+7[0-9]{10}$/.test(phoneInput.value)) {
        alert('Введите корректный номер телефона (например, +79123456789)');
        phoneInput.focus();
        return false;
    }

    // Проверка выбора услуги
    if (serviceSelect.value === '') {
        alert('Выберите услугу');
        serviceSelect.focus();
        return false;
    }

    // Проверка поля даты выполнения заказа
    if (deliveryDateInput.value === '') {
        alert('Выберите дату выполнения заказа');
        deliveryDateInput.focus();
        return false;
    }

    // Если все проверки пройдены, возвращаем true
    return true;
}

// Функция для вывода данных в модальное окно
function displayFormData() {
    var name = document.querySelector('.usluga input[type="text"]').value;
    var phone = document.querySelector('.usluga input[type="tel"]').value;
    var serviceSelect = document.querySelector('.usluga select[name="product"]');
    var product = serviceSelect.selectedOptions[0].text; 
    var deliveryDate = document.querySelector('.usluga input[name="deliveryDate"]').value;

    // Создание модального окна
    var modal = document.createElement('div');
    modal.style.position = 'fixed';
    modal.style.top = '50%';
    modal.style.left = '50%';
    modal.style.transform = 'translate(-50%, -50%)';
    modal.style.backgroundColor = '#ffffff';
    modal.style.padding = '20px';
    modal.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
    modal.style.borderRadius = '8px';
    modal.innerHTML = `
        <h2>Ваш заказ:</h2>
        <p><strong>Имя:</strong> ${name}</p>
        <p><strong>Телефон:</strong> ${phone}</p>
        <p><strong>Услуга:</strong> ${product}</p>
        <p><strong>Дата выполнения:</strong> ${deliveryDate}</p>
        <button id="closeModal" style="margin-top: 20px; padding: 10px 20px; background-color: #3685f4; color: #ffffff; border: none; border-radius: 4px; cursor: pointer;">Подвердить</button>
    `;

    document.body.appendChild(modal);

    // Закрытие модального окна
    document.getElementById('closeModal').addEventListener('click', function () {
        document.body.removeChild(modal);
        location.reload(); // Перезагрузка страницы
    });
}


// Назначаем функцию validateOrderForm() обработчиком события отправки формы
document.querySelector('.usluga form').addEventListener('submit', function (event) {
    event.preventDefault(); // Отменяем стандартное поведение формы

    if (validateOrderForm()) {
        // Если данные валидны, выводим их в модальное окно
        displayFormData();
    }
});
