"use strict";
class CountryCdDisk {
    diskType() {
        console.log(`Вы заказали CD Диск с жанром Country`);
    }
}
class JazzCdDisk {
    diskType() {
        console.log(`Вы заказали CD Диск с жанром Jazz`);
    }
}
class HipHopCdDisk {
    diskType() {
        console.log(`Вы заказали CD Диск с жанром HipHop`);
    }
}
class CdDisk {
    createCdDisk(genreType) {
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
