class CountryCdDisk {
  public diskType(): void {
    console.log(`Вы заказали CD Диск с жанром Country`);
  }
}

class JazzCdDisk {
  public diskType(): void {
    console.log(`Вы заказали CD Диск с жанром Jazz`);
  }
}

class HipHopCdDisk {
  public diskType(): void {
    console.log(`Вы заказали CD Диск с жанром HipHop`);
  }
}

class CdDisk {
  public createCdDisk(genreType: "country" | "jazz" | "hiphop") {
    if (genreType === "country") {
      return new CountryCdDisk();
    }
    if (genreType === "jazz") {
      return new JazzCdDisk();
    }
    if (genreType === "hiphop") {
      return new HipHopCdDisk();
    }
  }
}

const disk = new CdDisk();
disk.createCdDisk("country");
