import os
import re

base_path = r"d:\Personal\Agency\NOVADESK\src\pages"

def inject_keywords(file_name, keywords):
    file_path = os.path.join(base_path, file_name)
    with open(file_path, "r", encoding="utf-8") as f:
        content = f.read()

    # If it already has keywords=, skip
    if "keywords=" in content:
        return
        
    content = re.sub(
        r"(<SEO\s+title=.*?\n.*?>)",
        r'\1'.replace(">", f'  keywords="{keywords}"\n      >'),
        content,
        count=1,
        flags=re.DOTALL
    )
    # the regex is a bit flaky, let's just do string replacement
    
    with open(file_path, "w", encoding="utf-8") as f:
        f.write(content)

def add_keywords(file_name, keywords):
    file_path = os.path.join(base_path, file_name)
    with open(file_path, "r", encoding="utf-8") as f:
        content = f.read()
    
    if "keywords=" in content:
        return
        
    # find `<SEO ` and replace with `<SEO \n        keywords="{keywords}"`
    content = content.replace("<SEO ", f'<SEO \n        keywords="{keywords}" ')
    
    with open(file_path, "w", encoding="utf-8") as f:
        f.write(content)

add_keywords("AboutUs.jsx", "About NovaDesk, software engineering agency, custom web development, AI solutions, mobile app development")
add_keywords("ContactUs.jsx", "Contact NovaDesk, software agency contact, hire developers, free software consultation")
add_keywords("CaseStudies.jsx", "NovaDesk case studies, software development portfolio, successful tech projects, AI case studies")
add_keywords("PrivacyPolicy.jsx", "Privacy policy, data protection, NovaDesk privacy")
add_keywords("TermsConditions.jsx", "Terms and conditions, NovaDesk terms, service agreement")

