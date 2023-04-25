export default function ErrorMessage(details: ErrorDetails) {
    return (
        <>
        <h1>{details.title}</h1>
        <h2>{details.description}</h2>
        </>
    )
}

export interface ErrorDetails {
    title: string,
    description: string
}