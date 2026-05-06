# Tour 360 TP.HCM (Marzipano + Leaflet)

## Chạy local

Mở HTTP trong thư mục `app-files` (ví dụ `python -m http.server 8080`) rồi vào `/index.html`.

## Đẩy lên GitHub (miễn phí)

1. Tạo repo mới trên GitHub (**New repository**), **không** tick “Add README” (hoặc có cũng được, chỉ cần pull/merge sau).
2. Trong thư mục này (có `README.md`, `index.html`, `app-files/`):

```powershell
git init
git add .
git commit -m "Initial commit: Marzipano tour + mini-map"
git branch -M main
git remote add origin https://github.com/<TAI_KHOAN>/<TEN_REPO>.git
git push -u origin main
```

3. **GitHub Pages**: repo → **Settings** → **Pages** → **Build and deployment** → Source: **Deploy from a branch** → Branch **main**, folder **`/ (root)`** → Save.
4. Sau vài phút, site ở dạng `https://<TAI_KHOAN>.github.io/<TEN_REPO>/` — file `index.html` ở gốc sẽ chuyển hướng sang `app-files/index.html`.

## Lưu ý

- Toàn bộ `app-files/tiles/` cần có trên repo thì panorama mới hiện.
- Nếu repo &gt; ~1 GB hoặc file đơn lẻ &gt; 100 MB, cần [Git LFS](https://git-lfs.github.com/) hoặc host tiles nơi khác.
