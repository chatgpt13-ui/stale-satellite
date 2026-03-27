# CONC Thammasat Website

เว็บไซต์ประชาสัมพันธ์ของ CONC Thammasat พัฒนาด้วย Astro และ Tailwind CSS โดยโครงสร้างปัจจุบันเน้นหน้าองค์กร หลักสูตร ข่าวสาร งานให้คำปรึกษา และแบบฟอร์มติดต่อ

## Stack

- Astro 5
- Tailwind CSS
- Netlify Forms สำหรับฟอร์มติดต่อ
- Content collections และไฟล์ JSON สำหรับข้อมูลโปรแกรม ข่าวสาร และรายการเนื้อหา

## Project structure

- `src/pages/` เส้นทางหน้าเว็บไซต์
- `src/pages/conc/` หน้าหลักของหมวด About, Training, Consulting, Learning และ News
- `src/data/` ข้อมูลโปรแกรม ผู้บริหาร ข่าวสาร เอกสาร และรายการคอนเทนต์
- `src/components/` ส่วนประกอบ UI และ widget ที่ใช้ซ้ำ
- `src/config.yaml` ค่าหลักของเว็บไซต์และ SEO

## Commands

รันใน WSL จาก root ของโปรเจกต์:

```bash
npm install
npm run dev
npm run check
npm run build
```

หมายเหตุ: ถ้ารัน `npm` จาก PowerShell บน path แบบ UNC (`\\wsl.localhost\...`) อาจชนข้อจำกัดของ Windows และหา `package.json` ไม่เจอ ควรรันผ่าน WSL โดยตรง

## Current focus

- รักษา public routes ให้เหลือเฉพาะหน้าที่เกี่ยวข้องกับ CONC
- เติมข้อมูลจริงสำหรับหลักสูตร ช่องทางติดต่อ และเอกสารนโยบาย
- เชื่อม form submissions และ workflow หลังบ้านตามสภาพแวดล้อม deploy จริง

## Google login for course applications

ระบบสมัครหลักสูตรใช้ Google Sign-In ฝั่ง client และต้องตั้งค่า environment variable ต่อไปนี้ก่อนใช้งานจริง:

```bash
PUBLIC_GOOGLE_CLIENT_ID=your-google-oauth-client-id
```

ใน Google Cloud Console ให้เพิ่ม Authorized JavaScript origins ให้ตรงกับโดเมนที่ใช้รันเว็บ เช่น local dev และ production
