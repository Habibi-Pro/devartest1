// داده‌های مربوط به ولسوالی‌ها
const districtsData = {
    kabul: ["کابل", "پغمان", "چهار آسیاب", "خاک جبار", "بگرامی", "سروبی", "شکردره", "قره‌باغ", "گل‌دره"],
    herat: ["هرات", "انجیل", "گذره", "ادرسکن", "غوریان", "کرخ", "پشتون زرغون", "اوبه", "کهسان", "زنده جان", "چشت شریف"],
    kandahar: ["قندهار", "پنجوایی", "دامان", "سپین بولدک", "ارغنداب", "ژری", "میوند", "شاه ولی کوت", "معروف"],
    mazar: ["مزارشریف", "بلخ", "شولگره", "چمتال", "کلدار", "مارمل", "دهدادی", "خلم", "زارع"],
    takhar: ["تالقان", "فرخار", "بنگی", "اشکمش", "ورسج", "چاه آب", "خواجه غار", "ینگی قلعه"],
    // سایر ولایات
};

// نمایش ولسوالی‌ها
function loadDistricts() {
    const provinceSelect = document.getElementById("provinceSelect");
    const districtsContainer = document.getElementById("districtsContainer");
    const districtsList = document.getElementById("districtsList");

    const selectedProvince = provinceSelect.value;
    districtsList.innerHTML = ""; // پاک کردن لیست قبلی

    if (selectedProvince && districtsData[selectedProvince]) {
        districtsContainer.classList.remove("hidden");
        districtsData[selectedProvince].forEach((district) => {
            const label = document.createElement("label");
            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.value = district;

            label.appendChild(checkbox);
            label.appendChild(document.createTextNode(" " + district));
            districtsList.appendChild(label);
        });
    } else {
        districtsContainer.classList.add("hidden");
    }
}

// نمایش تب‌ها
function showTab(tabId) {
    const allTabs = document.querySelectorAll(".tab-content");
    const allLinks = document.querySelectorAll(".tab-link");

    allTabs.forEach((tab) => tab.classList.remove("active"));
    allLinks.forEach((link) => link.classList.remove("active"));

    document.getElementById(tabId).classList.add("active");
    event.target.classList.add("active");
}
