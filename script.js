document.addEventListener("DOMContentLoaded", () => {
    const provinceSelect = document.getElementById("province");
    const districtSelect = document.getElementById("district");
    const form = document.querySelector("form");

    // داده‌های ولسوالی‌ها بر اساس ولایت
    const districts = {
        badakhshan: ["فیض‌آباد", "شهدا", "بهارک", "ارگو", "شغنان", "واخان", "درواز"],
        badghis: ["قلعه نو", "آب‌کمری", "بالامرغاب", "مقر", "جوند"],
        baghlan: ["پلخمری", "بغلان مرکزی", "ده‌صلاح", "خنجان", "نهرین", "تالا"],
        balkh: ["مزار شریف", "چهاربولک", "بلخ", "خلم", "ده‌دادی"],
        bamyan: ["بامیان", "یکاولنگ", "شیبر", "سیغان", "پنجاب"],
        daikundi: ["نیلی", "شهرستان", "اشترلی", "کیتی", "خدیر"],
        farah: ["فراه", "اناردره", "بالابلوک", "پشت‌رود", "لاش‌جوین"],
        faryab: ["میمنه", "المار", "قیصار", "اندخوی", "پشتونکوت"],
        ghazni: ["غزنی", "جاغوری", "قره‌باغ", "ناور", "مالستان"],
        ghor: ["فیروزکوه", "دولت‌یار", "تیوره", "پسابند", "چارسده"],
        helmand: ["لشکرگاه", "گرمسیر", "مارجه", "نادعلی", "نوزاد"],
        herat: ["هرات", "انجیل", "گذره", "اوبه", "چشت‌شریف"],
        jawzjan: ["شبرغان", "قوش‌تپه", "آقچه", "فیض‌آباد"],
        kabul: ["شهر کابل", "ده‌سبز", "بگرامی", "پغمان", "شکردره"],
        kandahar: ["کندهار", "ارغنداب", "پنجوایی", "میوند"],
        kapisa: ["محمودراقی", "نجراب", "تگاب", "حصه‌اول"],
        khost: ["خوست", "گربز", "صبری", "موسی‌خیل"],
        kunar: ["اسعدآباد", "چپه‌دره", "نازیان", "نورگل"],
        kunduz: ["کندز", "امام‌صاحب", "قلعه‌زال", "علی‌آباد"],
        laghman: ["مهترلام", "قرغه‌یی", "دولت‌شاه"],
        logar: ["پل‌علم", "محمدآغه", "خوشی", "چرخ"],
        nangarhar: ["جلال‌آباد", "بهسود", "کامه", "گوشته"],
        nimroz: ["زرنج", "چخانسور", "خاشرود", "کن‌میله"],
        nuristan: ["پارون", "واما", "دوآب", "مندول"],
        paktia: ["گردیز", "زرمت", "سیدکرم", "احمدآباد"],
        paktika: ["شرنه", "وورممی", "سروبی", "ارگون"],
        panjshir: ["بازارک", "حصه‌اول", "آبشار", "رخه"],
        parwan: ["چاریکار", "سیدخیل", "جبل‌السراج", "سالنگ"],
        samangan: ["ایبک", "حضرت‌سلطان", "روی‌دوآب", "دره‌صوف"],
        "sar-e-pol": ["سرپل", "سانچارک", "بلخاب", "کوهستانات"],
        takhar: ["تالقان", "کلفگان", "فرخار", "رستاق"],
        uruzgan: ["ترینکوت", "دهراوود", "چور", "گیزاب"],
        wardak: ["میدان‌شهر", "جلریز", "چک", "بهسود"],
        zabul: ["قلات", "شینکی", "ارغنداب", "اتغر"],
    };

    // تغییر لیست ولسوالی‌ها با توجه به ولایت انتخابی
    provinceSelect.addEventListener("change", () => {
        const selectedProvince = provinceSelect.value;

        // پاک کردن ولسوالی‌های قبلی
        districtSelect.innerHTML = '<option value="">-- ابتدا ولایت را انتخاب کنید --</option>';

        // افزودن ولسوالی‌های جدید
        if (districts[selectedProvince]) {
            districts[selectedProvince].forEach((district) => {
                const option = document.createElement("option");
                option.value = district;
                option.textContent = district;
                districtSelect.appendChild(option);
            });
        }
    });

    // تأیید اطلاعات و نمایش پیام
    form.addEventListener("submit", (e) => {
        e.preventDefault(); // جلوگیری از ارسال فرم به سرور

        const selectedProvince = provinceSelect.value;
        const selectedDistrict = districtSelect.value;

        if (selectedProvince === "" || selectedDistrict === "") {
            alert("لطفاً ولایت و ولسوالی را انتخاب کنید!");
        } else {
            alert(
                `اطلاعات ثبت شد:\nولایت: ${provinceSelect.options[provinceSelect.selectedIndex].text}\nولسوالی: ${districtSelect.options[districtSelect.selectedIndex].text}`
            );
        }
    });
});
