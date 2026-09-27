from PIL import Image
import math, wave, array
from pathlib import Path
p=Path(__file__).parent
Image.open(p.parent/'art/mandap.png').resize((1200,800)).save(p/'dist/assets/mandap.webp',quality=87)
im=Image.open(p.parent/'art/gallery-sheet.png');w,h=im.size
for i,(x,y) in enumerate([(0,0),(1,0),(0,1),(1,1)]):
 im.crop((x*w//2,y*h//2,(x+1)*w//2,(y+1)*h//2)).resize((650,650)).save(p/f'dist/assets/gallery-{i+1}.webp',quality=86)
# Original synthesized flute-like melody; no third-party recording.
rate=22050; length=32; samples=array.array('h'); notes=[261.63,293.66,329.63,392,440,392,329.63,293.66,329.63,392,523.25,440,392,329.63,293.66,261.63]
for n in range(rate*length):
 t=n/rate; k=int(t/2); local=t%2; f=notes[k]; env=min(1,local/.18)*min(1,(2-local)/.45)
 phase=2*math.pi*f*t+.025*math.sin(2*math.pi*4.5*t)
 flute=(math.sin(phase)+.18*math.sin(2*phase)+.06*math.sin(3*phase))*env*.32
 drone=.07*math.sin(2*math.pi*130.815*t)+.025*math.sin(2*math.pi*196*t)
 fade=min(1,t/1.3,(length-t)/1.3)
 samples.append(int(24000*(flute+drone)*fade))
with wave.open(str(p/'dist/assets/flute.wav'),'wb') as out:
 out.setnchannels(1);out.setsampwidth(2);out.setframerate(rate);out.writeframes(samples.tobytes())
