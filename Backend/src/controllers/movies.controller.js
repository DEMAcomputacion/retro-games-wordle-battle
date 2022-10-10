import awsS3 from '../config/aws-s3.js'
import movieClass from '../utils/movieClass.js'
import { getSignedUrl } from '@aws-sdk/s3-request-presigner'
import { DeleteObjectCommand, GetObjectCommand } from '@aws-sdk/client-s3'
import filesUploadConfig from '../utils/filesUploadConfig.js'
import mongoose from 'mongoose'

const { BUCKET_NAME } = process.env

export const createMovie = async (req, res) => {
    const session = await mongoose.startSession()
    try {
        session.startTransaction()
        const files = filesUploadConfig(req.files)
        console.log(files)
        const movie = await movieClass.createNewMovie({ ...req.body, img: files.img.fileName, audio: files.audio.fileName })
        console.log(movie)
        const imgUpload = await awsS3.send(files.img.command)
        if (imgUpload.$metadata.httpStatusCode !== 200) throw new Error(imgUpload)
        const audioUpload = await awsS3.send(files.audio.command)
        if (audioUpload.$metadata.httpStatusCode !== 200) throw new Error(audioUpload)
        res.status(200).send(movie)
        await session.commitTransaction()
    } catch (err) {
        await session.abortTransaction()
        res.status(500).send(err.message)
    }
    session.endSession()
}

export const randomMovie = async (req, res) => {
    try {
        const movie = await movieClass.findRandom()

        const commandImg = new GetObjectCommand({
            Bucket: BUCKET_NAME,
            Key: movie.img
        })
        const urlImg = await getSignedUrl(awsS3, commandImg, { expiresIn: 3600 })
        movie.img = urlImg

        const commandAudio = new GetObjectCommand({
            Bucket: BUCKET_NAME,
            Key: movie.audio
        })
        const urlAudio = await getSignedUrl(awsS3, commandAudio, { expiresIn: 3600 })
        movie.audio = urlAudio

        res.status(200).send(movie)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

export const updateMovie = async (req, res) => {
    try {
        console.log(req.params.id)

        res.status(200).send(words[Math.floor(Math.random() * words.length())])

    } catch (err) {
        res.status(500).send(err.message)
    }
}

export const deleteMovie = async (req, res) => {
    try {
        const words = [
            { id: 1, name: 'intensamente', img: "assets/intensamente.png" },
            { id: 2, name: 'malefica', img: "assets/malefica.png" },
            { id: 3, name: 'zootopia', img: "assets/zootopia.png" },
            { id: 4, name: 'ratatouille', img: "assets/ratatouille.png" },
            { id: 5, name: 'enredados', img: "assets/enredados.png" }
        ]

        res.status(200).send(words[Math.floor(Math.random() * words.length())])

    } catch (err) {
        res.status(500).send(err.message)
    }
}