import fitz  # PyMuPDF

# Open the PDF file
pdf_document = fitz.open("/home/roddy/Programación/lista de 100 empresarios mas importantes de Mexico.pdf")
pages_text = []

# Let's extract text from the first few pages as an example
for page_num in range(1, 11):  # Adjust the range if more pages are needed
    page = pdf_document[page_num]
    # Extract text from the current page
    page_text = page.get_text()
    pages_text.append(page_text)

# Close the PDF after extraction
pdf_document.close()

for page in pages_text:
    print(page)

# Show the extracted text to understand how to parse it
with open('/home/roddy/Programación/extracted_text.txt', 'w') as file:
    for page in pages_text:
        file.write(page + "\n\n")
