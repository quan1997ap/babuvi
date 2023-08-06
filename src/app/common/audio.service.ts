// https://bigsoundbank.com/search?q=bip
// https://stackoverflow.com/questions/44883501/play-sound-in-angular-4
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class AudioService {
  audio: any;
  audio_co: any;
  audio_chuakhaibao: any;
  audio_coghichu: any;
  audio_dokhoiluong: any;

  constructor() {
    // let src = 'https://media.geeksforgeeks.org/wp-content/uploads/20190531135120/beep.mp3';
    let src = encodeURIComponent("assets/audio/BEEP.mp3");
    this.audio = new Audio(src);

    let noiCo = encodeURIComponent("assets/audio/noi-co.mp3");
    this.audio_co = new Audio(noiCo);

    let noiChuaKhaiBao = encodeURIComponent("assets/audio/noi-chua-khai-bao.mp3");
    this.audio_chuakhaibao = new Audio(noiChuaKhaiBao);

    let noiCoGhiChu = encodeURIComponent("assets/audio/noi-co-ghi-chu.mp3");
    this.audio_coghichu = new Audio(noiCoGhiChu);

    let noiDoKhoiLuong = encodeURIComponent("assets/audio/do-khoi-luong.mp3");
    this.audio_dokhoiluong = new Audio(noiDoKhoiLuong);
  }

  playAudio(): void {
    this.audio.load();
    this.audio.play();
  }

  playAudio_Co(): void {
    this.audio_co.load();
    this.audio_co.play();
  }

  playAudio_ChuaKhaiBao(): void {
    this.audio_chuakhaibao.load();
    this.audio_chuakhaibao.play();
  }

  playAudio_CoGhiChu(): void {
    this.audio_coghichu.load();
    this.audio_coghichu.play();
  }

  playAudio_DoKhoiLuong(): void {
    this.audio_dokhoiluong.load();
    this.audio_dokhoiluong.play();
  }
}
