import os
import re

base_path = r"d:\Personal\Agency\NOVADESK\src\pages"

def remove_manual_helmet(file_path):
    with open(file_path, "r", encoding="utf-8") as f:
        content = f.read()

    # Remove import { Helmet } from 'react-helmet-async';
    content = re.sub(r"import \{ Helmet \} from 'react-helmet-async';\n?", "", content)
    
    # Remove <Helmet> ... </Helmet> block
    content = re.sub(r"\s*<Helmet>.*?</Helmet>", "", content, flags=re.DOTALL)
    
    with open(file_path, "w", encoding="utf-8") as f:
        f.write(content)

# Remove manual Helmets from basic pages
basic_pages = ["AboutUs.jsx", "ContactUs.jsx", "CaseStudies.jsx", "PrivacyPolicy.jsx", "TermsConditions.jsx"]
for page in basic_pages:
    remove_manual_helmet(os.path.join(base_path, page))

# Now we process Home, FullStackDevelopment, WebApplicationDevelopment to replace Helmet with SEO component
def replace_helmet_with_seo(file_path, title, desc, url, keywords):
    with open(file_path, "r", encoding="utf-8") as f:
        content = f.read()
    
    # Add import SEO if not exists
    if "import SEO" not in content:
        # Check if components/SEO exists or if we are in services/
        import_path = "'../components/SEO'" if "/" not in file_path else "'../../components/SEO'"
        if "services\\" in file_path:
            import_path = "'../../components/SEO'"
        else:
            import_path = "'../components/SEO'"
        
        content = re.sub(
            r"(import React.*?;\n)",
            r"\1import SEO from " + import_path + ";\n",
            content,
            count=1
        )
    
    # Remove import { Helmet }
    content = re.sub(r"import \{ Helmet \} from 'react-helmet-async';\n?", "", content)

    # Replace <Helmet> ... </Helmet> with <SEO ... />
    seo_component = f"""<SEO 
        title="{title}"
        description="{desc}"
        url="{url}"
        keywords="{keywords}"
        schema={{schemaJson}}
      />"""
    
    content = re.sub(r"\s*<Helmet>.*?</Helmet>", "\n      " + seo_component, content, flags=re.DOTALL)
    
    with open(file_path, "w", encoding="utf-8") as f:
        f.write(content)


# Replace in Home.jsx
replace_helmet_with_seo(
    os.path.join(base_path, "Home.jsx"),
    "Full-Stack & AI Development Studio",
    "NovaDesk is a premier software engineering agency providing highly optimized offshore teams for custom Web apps, mobile systems, and AI deployments.",
    "/",
    "NovaDesk, software agency, AI development, Full Stack Development, offshore engineering"
)

# Replace in FullStackDevelopment.jsx
replace_helmet_with_seo(
    os.path.join(base_path, "services", "FullStackDevelopment.jsx"),
    "Full-Stack Web Development Services",
    "Custom full-stack web application development using Next.js, FastAPI & Supabase. From MVP to production — built and shipped by one developer. Get a free quote.",
    "/services/full-stack-development",
    "full-stack web development, Next.js developer, FastAPI development, Supabase, web app MVP, custom software development"
)

# Replace in WebApplicationDevelopment.jsx
replace_helmet_with_seo(
    os.path.join(base_path, "services", "WebApplicationDevelopment.jsx"),
    "Custom Web Application Development Services",
    "Custom web application development for startups & businesses — dashboards, portals, booking systems, internal tools. Built to scale. Get a free quote.",
    "/services/web-application-development",
    "web application development, custom web app, React development, business dashboard, internal tools"
)
