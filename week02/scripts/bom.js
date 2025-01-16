const input = document.querySelector('input')
const button = document.querySelector('button')
const list = document.querySelector('ul')

button.addEventListener('click', function() {
    if (input.value.trim() !== '') {
        const li = document.createElement('li')
        const deleteButton = document.createElement('button')

        li.textContent = input.value
        deleteButton.textContent = '❌'

        deleteButton.addEventListener('click', function() {
            console.log('delete button clicked');
                list.removeChild(li);    
            input.focus();
            input.value = '';
        })

        li.append(deleteButton)
        list.append(li)

        input.value = '';
        input.focus();
        console.log('Input focused');
    }
})