window.addEventListener("DOMContentLoaded",()=>{const t=document.createElement("script");t.src="https://www.googletagmanager.com/gtag/js?id=G-W5GKHM0893",t.async=!0,document.head.appendChild(t);const n=document.createElement("script");n.textContent="window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-W5GKHM0893');",document.body.appendChild(n)});// �ص�Ӧ���̵���ҳ��ť
const homeButton = document.createElement('button');
homeButton.textContent = '�ص�Ӧ���̵���ҳ';
homeButton.style.position = 'fixed';
homeButton.style.bottom = '20px';
homeButton.style.left = '20px';
homeButton.style.padding = '10px 20px';
homeButton.style.backgroundColor = '#0d6efd';
homeButton.style.color = 'white';
homeButton.style.border = 'none';
homeButton.style.borderRadius = '6px';
homeButton.style.zIndex = '9999';
homeButton.addEventListener('click', () => {
    window.location.href = 'https://hydro.ac/user/120359';
});
window.addEventListener('load', () => document.body.appendChild(homeButton));

// Ӧ�ð�װ�������Ż�
document.addEventListener('click', (e) => {
    const target = e.target.closest('a');
    if (target && target.href) {
        const storeExts = ['.apk', '.exe', '.pdf', '.zip'];
        if (storeExts.some(ext => target.href.toLowerCase().endsWith(ext))) {
            e.preventDefault();
            const link = document.createElement('a');
            link.href = target.href;
            link.download = target.textContent || 'Ӧ�ð�װ��';
            link.click();
        }
    }
});