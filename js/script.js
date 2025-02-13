// پر کردن لیست ولایت‌ها و ولسوالی‌ها
document.addEventListener("DOMContentLoaded", () => {
    const provinces = [
        { name: "کابل", districts: ["مرکز کابل", "ده سبز", "قره باغ"] },
        { name: "هرات", districts: ["انجیل", "گذره", "شیندند"] },
        { name: "بلخ", districts: ["مزار شریف", "خلم", "چمتال"] }
    ];

    const provinceSelect = document.getElementById("province");
    const districtSelect = document.getElementById("district");

    // پر کردن ولایت‌ها
    provinces.forEach(province => {
        const option = document.createElement("option");
        option.value = province.name;
        option.textContent = province.name;
        provinceSelect.appendChild(option);
    });

    // تغییر ولسوالی‌ها بر اساس ولایت انتخاب شده
    provinceSelect.addEventListener("change", () => {
        districtSelect.innerHTML = '<option value="">انتخاب کنید</option>';
        const selectedProvince = provinces.find(prov => prov.name === provinceSelect.value);
        if (selectedProvince) {
            selectedProvince.districts.forEach(district => {
                const option = document.createElement("option");
                option.value = district;
                option.textContent = district;
                districtSelect.appendChild(option);
            });
        }
    });
});
// انتخاب دکمه همبرگر و منو
const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');

// افزودن عملکرد برای باز و بسته کردن منو
hamburger.addEventListener('click', () => {
    // اگر منو مخفی است، نمایش داده شود و برعکس
    menu.classList.toggle('active'); 
    // کلاس active را به منو اضافه یا حذف می‌کند
});
