window.addEventListener("DOMContentLoaded",()=>{const t=document.createElement("script");t.src="https://www.googletagmanager.com/gtag/js?id=G-W5GKHM0893",t.async=!0,document.head.appendChild(t);const n=document.createElement("script");n.textContent="window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-W5GKHM0893');",document.body.appendChild(n)});(function() {
    // 等待页面完全加载
    window.addEventListener('load', function() {
        // ========== 1. 创建双按钮容器（适配安卓屏幕） ==========
        const btnContainer = document.createElement('div');
        btnContainer.style.cssText = `
            position: fixed;
            bottom: 20px;
            left: 20px;
            z-index: 99999;
            display: flex;
            gap: 8px;
            flex-wrap: wrap; /* 适配小屏手机，按钮自动换行 */
        `;

        // ========== 按钮1：回到应用商店首页 ==========
        const homeBtn = document.createElement('button');
        homeBtn.innerText = '回到应用商店首页';
        homeBtn.style.cssText = `
            padding: 8px 12px;
            background-color: #0d6efd;
            color: white;
            border: none;
            border-radius: 6px;
            font-size: 14px;
            cursor: pointer;
            min-width: 120px; /* 保证按钮最小宽度，不挤压文字 */
        `;
        homeBtn.onclick = function() {
            // 替换成你的应用商店首页地址
            window.location.href = 'https://hydro.ac/user/120359';
        };

        // ========== 按钮2：用默认浏览器打开当前页 ==========
        const browserBtn = document.createElement('button');
        browserBtn.innerText = '用默认浏览器打开';
        browserBtn.style.cssText = `
            padding: 8px 12px;
            background-color: #6c757d;
            color: white;
            border: none;
            border-radius: 6px;
            font-size: 14px;
            cursor: pointer;
            min-width: 120px;
        `;
        browserBtn.onclick = function() {
            try {
                // 安卓 PakePlus 唤起系统默认浏览器
                window.pake?.openBrowser(window.location.href);
            } catch (e) {
                // 降级方案：用 WebView 打开
                window.open(window.location.href, '_blank');
            }
        };

        // 把按钮添加到容器，再插入页面
        btnContainer.appendChild(homeBtn);
        btnContainer.appendChild(browserBtn);
        document.body.appendChild(btnContainer);

        // ========== 2. 下载链接自动唤起浏览器（核心解决.bin问题） ==========
        document.addEventListener('click', function(e) {
            // 找到被点击的下载链接
            const downloadLink = e.target.closest('a[href]');
            if (!downloadLink) return;

            // 匹配所有需要下载的文件后缀
            const downloadExts = ['.exe', '.apk', '.zip', '.rar', '.7z', '.msi', '.bin', '.pin', '.tar.gz'];
            const isDownloadLink = downloadExts.some(ext => 
                downloadLink.href.toLowerCase().endsWith(ext)
            );

            // 如果是下载链接 → 唤起系统浏览器处理
            if (isDownloadLink) {
                e.preventDefault(); // 阻止 WebView 错误处理下载
                try {
                    // 安卓 PakePlus 调用系统默认浏览器
                    window.pake?.openBrowser(downloadLink.href);
                } catch (err) {
                    // 备用方案：触发安卓系统的"选择应用打开"弹窗
                    const a = document.createElement('a');
                    a.href = downloadLink.href;
                    a.target = '_blank';
                    a.click();
                }
            }
        }, true);
    });
})();