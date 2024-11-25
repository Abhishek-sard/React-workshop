// 1. React Server Components (RSC)
// Concept:
// Server Components allow you to render components on the server and send them to the client as HTML. This improves performance by reducing JavaScript sent to the client.

export default function ServerComponent(){
    return <div>
        <h1>Server Component</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic reiciendis assumenda perferendis saepe ea ipsum, natus provident a adipisci facere animi libero dignissimos, velit atque in fugiat. Aliquam, tempore praesentium.</p>
    </div>;
}