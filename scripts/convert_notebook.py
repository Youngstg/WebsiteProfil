"""
Script Otomatis Konversi Jupyter Notebook (.ipynb) ke HTML untuk Portofolio
Cara pakai:
    python scripts/convert_notebook.py <path_ke_file.ipynb> [output_name]

Contoh:
    python scripts/convert_notebook.py my_analysis.ipynb breast-cancer
"""

import sys
import os
import shutil
import subprocess
import re

def clean_filename(name):
    name = re.sub(r'[^\w\-_.]', '_', name)
    return name.lower()

def convert_notebook(ipynb_path, output_name=None):
    if not os.path.exists(ipynb_path):
        print(f"Error: File '{ipynb_path}' tidak ditemukan.")
        sys.exit(1)

    base_name = os.path.splitext(os.path.basename(ipynb_path))[0].strip()
    if output_name:
        slug = clean_filename(output_name)
    else:
        slug = clean_filename(base_name)

    project_root = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    target_dir = os.path.join(project_root, "public", "notebooks")
    os.makedirs(target_dir, exist_ok=True)

    dest_html = os.path.join(target_dir, f"{slug}.html")
    dest_ipynb = os.path.join(target_dir, f"{slug}.ipynb")

    print(f"[*] Mengonversi '{ipynb_path}' ke HTML...")
    
    # Jalankan jupyter nbconvert
    cmd = [
        sys.executable, "-m", "nbconvert",
        "--to", "html",
        ipynb_path,
        "--output", f"{slug}.html",
        "--output-dir", target_dir
    ]
    
    result = subprocess.run(cmd, capture_output=True, text=True)
    if result.returncode != 0:
        print("[!] Gagal mengonversi notebook:")
        print(result.stderr)
        sys.exit(1)

    # Salin juga file .ipynb asli jika lokasinya berbeda
    if os.path.abspath(ipynb_path) != os.path.abspath(dest_ipynb):
        shutil.copyfile(ipynb_path, dest_ipynb)

    print(f"[OK] Berhasil dibuat:")
    print(f"     HTML: public/notebooks/{slug}.html")
    print(f"     IPYNB: public/notebooks/{slug}.ipynb")
    print("\n" + "="*50)
    print("Snippet untuk ditambahkan ke src/data/portfolio.json:")
    print("="*50)
    snippet = f"""    {{
      "id": 9,
      "title": "{base_name.replace('_', ' ').title()}",
      "description": "Exploratory Data Analysis dan pemodelan Machine Learning interaktif.",
      "category": "AI/ML",
      "isNotebook": true,
      "notebookUrl": "/notebooks/{slug}.html",
      "ipynbUrl": "/notebooks/{slug}.ipynb",
      "colabUrl": "https://colab.research.google.com/github/Youngstg/<REPO>/blob/main/{os.path.basename(ipynb_path)}",
      "repoUrl": "https://github.com/Youngstg/<REPO>",
      "tags": ["Jupyter", "Machine Learning", "Python", "Data Science"],
      "embedPreview": true
    }}"""
    print(snippet)
    print("="*50)

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Penggunaan: python scripts/convert_notebook.py <path_notebook.ipynb> [nama_output]")
        sys.exit(1)
    
    path = sys.argv[1]
    name = sys.argv[2] if len(sys.argv) > 2 else None
    convert_notebook(path, name)
