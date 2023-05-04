
from pyscript import Element

#dom
text_enc_element = Element("text_enc")
text_decode_element = Element("text_decode")


def encode(*args, **kwargs):
   encode = []
   enc_value:str = text_enc_element.value
   char_text = list(enc_value.strip())
   for leter in char_text:
        encode.append(chr(ord(leter) + 10))
   else:
       text_decode_element.write(''.join(encode))
   

def decode(*args, **kwargs):
    
   
   decode = []
   denc_value:str = text_decode_element.value
   char_text = list(denc_value.strip())
   
   for leter in char_text:
        decode.append(chr(ord(leter) - 10))
   else:
       text_decode_element.write(''.join(decode))

def copy(*args, **kwargs):
    pass
   





