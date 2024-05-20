import os
import img2pdf
import glob
import ocrmypdf



#ruta absoulta    
folder = "/home/user/libros"

#crea carpetas auxliares apra el proceso
folders = ["PDFS", "tmp"]

for folder in folders:
    if not os.path.exists(folder+folder):
        os.makedirs(folder+folder)

#recorre recursivamente los directorios para formar un PDF por cada uno de ellos que contenga .tifs        
for (path, directorios, archivos) in os.walk(folder):
    #verifica si esta vacio    
    if len(archivos) == 0: 
        print(path+"\n")
        print("Sin tifs: "+path.split("/")[-1]+"\n\n\n")
        continue
    
    #verifica que no corresponmda a los directorios auxiliares
    if path == folder+"PDFS" or path == folder+"tmp" :
        print("------------")
        continue
    #verifica que el pdf no haya sido creado ya
    if os.path.isfile(folder+"/PDFS/"+ path.split("/")[-1] + ".pdf"):
        continue
    
    
    
    print(path.split("/")[-1]+"\n\n\n")
    
    
    "asigan el nombre del pdf resultanto con base al nombre del directorio que contiene los tifs
    filename = folder+"tmp/"+ path.split("/")[-1] + ".pdf" 
    filename_ocr = folder+"PDFS/"+ path.split("/")[-1] + ".pdf" 
    # continue
    
    #Crea el PDf con OCR apartir de los tiffs encontrados
    with open(filename.replace('"',''), "wb") as f:
            try:
                print("*****armando pdf en: "+path+"\n\n")
                f.write(img2pdf.convert(sorted(glob.glob(path+"/*.tif"))))             
            except Exception as e:
                print("\n\n\n---------------------------\n"+'Fail: '+filename+"\n\n"+str(e)+"\n---------------------------")      
                os.remove(filename)
    result = ocrmypdf.ocr(filename, filename_ocr, language='spa', deskew=True, clean=True)   
    os.remove(filename)        
print("Proceso terminado...")

