
from pyscript import Element
import pyperclip3


#dom
text_enc_element = Element("text_enc")
text_decode_element = Element("text_decode")

#variables
matriz_codigo:dict = {
  'e': "enter", 
  'i': "imes", 
  'o': "ober", 
  'a': "ai", 
  'u': "ufat"
}

enc:list = []


def encode(*args, **kwargs):
   enc_value:str = text_enc_element.value
   char_text = list(enc_value.strip())
   for letter in char_text:
        if matriz_codigo.get(letter):
             enc.append(matriz_codigo.get(letter))
        enc.append(letter) 
   else:
       text_decode_element.write(''.join(enc))
   

def decode(*args, **kwargs):
     for indice in range(len(enc)) :
         for key in matriz_codigo:
             if enc[indice] == matriz_codigo[key]:
                enc[indice] = ''
                break
     else:
          text_decode_element.write(''.join(enc))
          enc.clear()
     
     
def copy(*args, **kwargs):
    pyperclip3.copy("holaaaa")
    a2 = pyperclip3.paste()
    print(a2)
   




