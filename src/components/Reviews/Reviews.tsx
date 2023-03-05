import {
    Button,
    Card,
    CardContent,
    TextareaAutosize,
    TextField,
    Typography,
} from '@mui/material'
import { useState } from 'react'
import { text } from 'stream/consumers'

type Props = {}

type Review = {
    name: string
    text: string
}

const Reviews = (props: Props) => {
    const arrReviews: Review[] = [
        {
            name: 'John',
            text: 'this is the review',
        },
        { name: 'John2', text: 'this is the review' },
        {
            name: 'John3',
            text: 'this is the review',
        },
    ]

    const [reviews, setReviews] = useState<Review[]>(arrReviews)
    const [newReview, setNewReview] = useState<Review>({
        name: '',
        text: '',
    })

    const handleName = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNewReview((prevState) => ({
            ...prevState,
            name: event.target.value,
        }))
    }
    const handleText = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setNewReview((prevState) => ({
            ...prevState,
            text: event.target.value,
        }))
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setReviews((prevState) => {
            return [...prevState, newReview]
        })
        setNewReview({ name: '', text: '' })
    }

    return (
        <>
            <Typography
                component="h2"
                variant="h4"
                sx={{
                    margin: '40px 0',
                }}
            >
                Reviews
            </Typography>
            {reviews.map(({ name, text }, i) => {
                return (
                    <Card variant="outlined" key={i}>
                        <CardContent>
                            <div>{name}:</div>
                            <div>{text}</div>
                        </CardContent>
                    </Card>
                )
            })}

            <form onSubmit={handleSubmit}>
                <h3>Please leave a review</h3>
                <div>
                    <TextField
                        placeholder="Name"
                        value={newReview.name}
                        onChange={handleName}
                    />
                </div>
                <br />
                <div>
                    <TextareaAutosize
                        minRows={7}
                        placeholder="Your review"
                        value={newReview.text}
                        onChange={handleText}
                    />
                </div>
                <Button variant="outlined" type="submit">
                    Send
                </Button>
            </form>
        </>
    )
}

export default Reviews
