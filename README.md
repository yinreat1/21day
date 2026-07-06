# 21 DAY

Premium tanıtım sitesi. Vite ile build edilir, GitHub Pages üzerinde yayınlanır.

## Yerel geliştirme

```bash
npm install
npm run dev
```

## Üretim buildi

```bash
npm run build
```

Çıktı `dist/` klasöründe oluşur.

## GitHub Pages'te yayınlama

Bu repo otomatik deploy için yapılandırıldı — `.github/workflows/deploy.yml` workflow'u `main` branch'ine push yapıldığında siteyi build edip GitHub Pages'e yayınlar.

### Tek seferlik ayar (ÖNEMLİ — hata alıyorsanız buradan başlayın)

1. GitHub repo sayfasında **Settings** sekmesine gidin
2. Sol menüden **Pages** seçin
3. **Build and deployment** altında **Source** kısmını **GitHub Actions** olarak seçin
   - "Deploy from a branch" seçiliyse değiştirin — aksi halde "Deployment failed" hatası alırsınız
4. `main` branch'ine push yapın — workflow otomatik çalışır

### Workflow çalışmıyorsa

- **Settings → Actions → General** altında "Allow all actions" seçili olduğundan emin olun
- **Settings → Pages** altında Source'un "GitHub Actions" olduğundan emin olun
- Workflow'u manuel çalıştırmak için: **Actions** sekmesi → "Deploy to GitHub Pages" → **Run workflow**

Yayınlandıktan sonra site adresiniz: `https://<kullanici-adi>.github.io/<repo-adi>/`

> `vite.config.js` içinde `base: "./"` ayarı, sitenin alt dizinden servis edilmesini sağlar — görsel ve stil yolları kırılmaz.
