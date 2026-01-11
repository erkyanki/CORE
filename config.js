// =====================================================
// CORE - ACİL DURUM SİSTEMİ YAPILANDIRMA DOSYASI
// =====================================================
// Bu dosyada n8n webhook URL'inizi ve diğer ayarları yapılandırın.
// 
// n8n'de Webhook node'u oluşturun ve URL'yi buraya yapıştırın.
// Örnek: https://your-n8n-instance.com/webhook/acil-durum
// =====================================================

// n8n Webhook URL
const N8N_WEBHOOK_URL = 'https://yankiural.app.n8n.cloud/webhook/ceb40d4f-d308-4cc3-8662-6f50145b1473';

// =====================================================
// n8n WEBHOOK KURULUMU
// =====================================================
// 
// 1. n8n'de yeni bir workflow oluşturun
// 
// 2. "Webhook" node'u ekleyin:
//    - HTTP Method: POST
//    - Path: acil-durum (veya istediğiniz bir isim)
//    - Response Mode: "Immediately respond"
// 
// 3. Webhook'u aktifleştirin ve URL'yi kopyalayın
//    URL şuna benzer olacak:
//    https://your-n8n.com/webhook/acil-durum
// 
// 4. URL'yi yukarıdaki N8N_WEBHOOK_URL'ye yapıştırın
// 
// 5. Workflow'a ekleyebileceğiniz örnek node'lar:
//    - Google Sheets: Bildirimleri kaydetmek için
//    - Telegram/Slack: Anlık bildirim için
//    - Email: E-posta göndermek için
//    - SMS servisi: SMS göndermek için
// 
// =====================================================

// Dashboard için API endpoint (opsiyonel)
const DASHBOARD_API_URL = 'YOUR_DASHBOARD_API_URL_HERE';

// Google Sheets ID (opsiyonel - n8n'de kullanabilirsiniz)
const GOOGLE_SHEETS_ID = 'YOUR_GOOGLE_SHEETS_ID_HERE';
