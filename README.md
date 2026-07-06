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

**Tek seferlik ayar (repo ayarları):**

1. GitHub repo sayfasında **Settings → Pages**
2. **Build and deployment** altında **Source** kısmını **GitHub Actions** olarak seçin
3. `main` branch'ine push yapın — workflow otomatik çalışır

Yayınlandıktan sonra site adresiniz: `https://<kullanici-adi>.github.io/<repo-adi>/`

> `vite.config.js` içinde `base: "./"` ayarı, sitenin alt dizinden servis edilmesini sağlar — görsel ve stil yolları kırılmaz.
