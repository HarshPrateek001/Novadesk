import os
import re

base_path = r"d:\Personal\Agency\NOVADESK\src\pages"

def inject_helmet(file_path, title, description, keywords, schema=None):
    with open(file_path, "r", encoding="utf-8") as f:
        content = f.read()

    # Check if Helmet is already imported
    if "import { Helmet }" not in content and "import Helmet" not in content and "import SEO" not in content:
        # Import Helmet
        content = re.sub(
            r"(import React.*?;\n)",
            r"\1import { Helmet } from 'react-helmet-async';\n",
            content,
            count=1
        )
    
    # If the file already uses SEO component or Helmet, we will just manually add Helmet if it doesn't exist.
    # Actually, let's just insert a `<Helmet>` block right after the return statement if it's not Home or services.
    
    helmet_str = f"""
      <Helmet>
        <title>{title}</title>
        <meta name="description" content="{description}" />
        <meta name="keywords" content="{keywords}" />
        <meta property="og:title" content="{title}" />
        <meta property="og:description" content="{description}" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.novadesk.site" />
"""
    if schema:
        helmet_str += f"""
        <script type="application/ld+json">
          {{`
{schema}
          `}}
        </script>
"""
    helmet_str += "      </Helmet>"
    
    # For simple pages (AboutUs, ContactUs, PrivacyPolicy, TermsConditions, CaseStudies)
    # The return usually looks like `return (\n    <>` or `return (\n    <div`
    # Let's replace the first instance after `return (`
    content = re.sub(r"(return\s*\(\s*(?:<>\s*|<div.*?>\s*))", r"\1" + helmet_str + "\n", content, count=1)
    
    with open(file_path, "w", encoding="utf-8") as f:
        f.write(content)

# Process AboutUs
inject_helmet(
    os.path.join(base_path, "AboutUs.jsx"),
    "About NovaDesk | Premier Software Engineering Agency",
    "Learn about NovaDesk, a top-tier software engineering agency. We build custom web applications, mobile apps, and AI solutions for startups and enterprises.",
    "About NovaDesk, software engineering agency, custom web development, AI solutions, mobile app development"
)

# Process ContactUs
inject_helmet(
    os.path.join(base_path, "ContactUs.jsx"),
    "Contact NovaDesk | Let's Build Your Product",
    "Get in touch with NovaDesk to discuss your next big software, mobile app, or AI project. We provide a free discovery call and transparent pricing.",
    "Contact NovaDesk, software agency contact, hire developers, free software consultation"
)

# Process CaseStudies
inject_helmet(
    os.path.join(base_path, "CaseStudies.jsx"),
    "Case Studies | NovaDesk Work Portfolio",
    "Explore our portfolio of successful software projects. See how NovaDesk has built scalable solutions for startups, real estate, logistics, and more.",
    "NovaDesk case studies, software development portfolio, successful tech projects, AI case studies"
)

# Process PrivacyPolicy
inject_helmet(
    os.path.join(base_path, "PrivacyPolicy.jsx"),
    "Privacy Policy | NovaDesk",
    "Read the NovaDesk Privacy Policy. Learn how we collect, use, and protect your data when you use our software development and consulting services.",
    "Privacy policy, data protection, NovaDesk privacy"
)

# Process TermsConditions
inject_helmet(
    os.path.join(base_path, "TermsConditions.jsx"),
    "Terms and Conditions | NovaDesk",
    "Review the Terms and Conditions for working with NovaDesk. Guidelines, agreements, and policies for our software engineering services.",
    "Terms and conditions, NovaDesk terms, service agreement"
)
