import Balancer from 'react-wrap-balancer'

export default function AboutMe() {
    return (
        <div className="flex justify-center items-center text-center px-4 py-6">
            <div>
                <h2 className="capitalize mb-1 font-semibold text-xl">About me</h2>
                <p className="text-sm"><Balancer>I am the Founder of Reecoplast, a startup that turns plastic waste into eco-friendly products, recognized for its innovation. My achievements include 2nd Runner-up at the Presidential Pitch Ghana 2023 and awards like Most Innovative Project Idea at the Circular Plastics Challenge 2023 and the Global Youth Social Entrepreneurship Competition 2022.</Balancer></p>
            </div>
        </div>
    );
}
