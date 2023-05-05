
from pyscript import Element
import pyperclip3
from js import navigator, alert


#dom
text_enc_element = Element("text_enc")
text_decode_element = Element("text_decode")
button_dec = Element("dec")

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
   if len(enc) == 0:
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
    navigator.clipboard.writeText(text_decode_element.value)
    alert('texto copiado')

   




