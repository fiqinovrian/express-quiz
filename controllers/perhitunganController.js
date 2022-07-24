const History = require('../models').History;

const getAllHistory = (req, res) => {
    History.findAll()
        .then((data) => {
            return res.status(200).json(data)
        })
        .catch(err => {
            return res.status(500).json(err)
        })
}

const hitung = (req, res) => {
    const angka1 = req.body.angka1;
    const angka2 = req.body.angka2;
    let tipe = req.body.tipe;
    let hasil = 0;
    switch (tipe.toUpperCase()) {
        case "TAMBAH":
            hasil = angka1 + angka2;
            History.create({
                angka1: angka1,
                angka2: angka2,
                tipe: tipe,
                hasil: hasil,
                formula: `${angka1} + ${angka2} = ${hasil}`
            })
            .then((data) => {
                return res.status(200).json(data);
            })
            .catch(err => {
                return res.status(500).json(err);
            })
            break;
        case "KURANG":
            hasil = angka1 - angka2;
            History.create({
                angka1: angka1,
                angka2: angka2,
                tipe: tipe,
                hasil: hasil,
                formula: `${angka1} - ${angka2} = ${hasil}`
            })
                .then((data) => {
                    return res.status(200).json(data);
                })
                .catch(err => {
                    return res.status(500).json(err);
                })
            break;
        case "KALI":
            hasil = angka1 * angka2;
            History.create({
                angka1: angka1,
                angka2: angka2,
                tipe: tipe,
                hasil: hasil,
                formula: `${angka1} * ${angka2} = ${hasil}`
            })
                .then((data) => {
                    return res.status(200).json(data);
                })
                .catch(err => {
                    return res.status(500).json(err);
                })
            break;
        case "BAGI":
            hasil = angka1 / angka2;
            History.create({
                angka1: angka1,
                angka2: angka2,
                tipe: tipe,
                hasil: hasil,
                formula: `${angka1} / ${angka2} = ${hasil}`
            })
                .then((data) => {
                    return res.status(200).json(data);
                })
                .catch(err => {
                    return res.status(500).json(err);
                })
            break;
        default:
            hasil = 0;
    }
}
    // if (tipe === "tambah") {
    //     const hasil = angka1 + angka2;
    //     History.create({
    //             angka1: angka1,
    //             angka2: angka2,
    //             tipe: tipe,
    //             formula: `${angka1} + ${angka2} = ${hasil}`
    //         })
    //         .then((data) => {
    //             return res.json(`Hasil : ${hasil}`);
    //         })
    //         .catch(err => {
    //             return res.status(500).json(err)
    //         })
    // } else
    // if (tipe == "kurang") {
    //     const hasil = angka1 - angka2;
    //     History.create({
    //             angka1: angka1,
    //             angka2: angka2,
    //             tipe: tipe,
    //             formula: `${angka1} - ${angka2} = ${hasil}`
    //         })
    //         .then((data) => {
    //             return res.json(`Hasil : ${hasil}`);
    //         })
    //         .catch(err => {
    //             return res.status(500).json(err)
    //         })
    //     return res.json(`Hasil : ${hasil}`)
    // } else
    // if (tipe == "kali") {
    //     const hasil = angka1 * angka2;
    //     History.create({
    //             angka1: angka1,
    //             angka2: angka2,
    //             tipe: tipe,
    //             formula: `${angka1} * ${angka2} = ${hasil}`
    //         })
    //         .then((data) => {
    //             return res.json(`Hasil : ${hasil}`);
    //         })
    //         .catch(err => {
    //             return res.status(500).json(err)
    //         })
    //     return res.json(`Hasil : ${hasil}`)
    // } else
    // if (tipe == "bagi") {
    //     const hasil = angka1 / angka2;
    //     History.create({
    //             angka1: angka1,
    //             angka2: angka2,
    //             tipe: tipe,
    //             formula: `${angka1} / ${angka2} = ${hasil}`
    //         })
    //         .then((data) => {
    //             return res.json(`Hasil : ${hasil}`);
    //         })
    //         .catch(err => {
    //             return res.status(500).json(err)
    //         })
    //     return res.json(`Hasil : ${hasil}`)
    // } else {
    //     return res.status(500).json('Error')
    // }

module.exports = {
    getAllHistory,
    hitung
}