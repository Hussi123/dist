// link item
const tabs1 = document.querySelectorAll('.form-tabs1 [data-tab-target]')
const tabContent1 = document.querySelectorAll('.form-items1 [data-tab-content]');  //form-items1

console.log(tabs1);
console.log(tabContent1);

tabs1.forEach(tab => {

    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.tabTarget);

        tabs1.forEach(tab => {
            tab.classList.remove('active')
        })
        tabContent1.forEach(tabContent => {
            tabContent.classList.remove('active');
        });
        tab.classList.add('active');
        target.classList.add('active');
    });
})

const tabs2 = document.querySelectorAll('.form-tabs2 [data-tab-target]')
const tabContent2 = document.querySelectorAll('.form-items2 [data-tab-content]');  //form-items1


tabs2.forEach(tab => {

    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.tabTarget);

        tabs2.forEach(tab => {
            tab.classList.remove('active')
        })
        tabContent2.forEach(tabContent => {
            tabContent.classList.remove('active');
        });
        tab.classList.add('active');
        target.classList.add('active');
    });
})

const tabs3 = document.querySelectorAll('.form-tabs3 [data-tab-target]')
const tabContent3 = document.querySelectorAll('.form-items3 [data-tab-content]');  //form-items1

tabs3.forEach(tab => {

    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.tabTarget);

        tabs3.forEach(tab => {
            tab.classList.remove('active')
        })
        tabContent3.forEach(tabContent => {
            tabContent.classList.remove('active');
        });
        tab.classList.add('active');
        target.classList.add('active');
    });
})
