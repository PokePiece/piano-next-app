'use client';

import React from 'react'
import ReactPlayer from 'react-player';

const page = () => {


    return (
        <main>
            <h1 className="text-center">Beethoven</h1>
            <p>My problem with Beethoven, as I hinted at earlier, is he's too expressive.
                Or perhaps I wouldn't say that. He's too much. Beethoven robs a bank with a gun.
                There's no need for that. Just open a checkings account, get your cash, walk out.
                He'd rob a bank with a gun when he'd have a ton of cash because he watched Oceans
                11 and he thinks he's got what it takes. In some sense it's dull.
                
            </p>
            <p>
                I will carry this point home past its point. Beethoven occasionally loses touch with the
                actual essence of the song. Liszt does this sometimes, too. Liszt, for example, will have a
                damn good piece but then adds about a dozen finishes on top of it for no particular reason other
                than to show off he's a piano virtuoso. Beethoven will have a vision, but then another 
                dozen visions on top of that that he fails to deliver in any wholly intelligeble form. If Chopin does
                either of those things, he rules them out when he composes his music. He lets the listener have the
                additional visions and embellishments.
            </p>
            <p>
                That being said, he's got some work worth looking at. His predisposition toward the future doesn't
                detract from the quality of his music in a fatal sense. Not by any means. The far-reaching nature of it, though
                perhaps a bit too far-reaching in a practical sense, adds for many only grandeur and interest. 
            </p>
            <h3>Works</h3>
            <p>The first piece I'll discuss is Moonlight Sonata, because we ended on Fantaisie Impromptu on the last one.
                Moonlight Sonata is very technically related to Fantasie Impromptu from a musical standpoint. You could say they
                draw off each other. So this is, in effect, Beethoven's take on the same idea as Chopin's Fantaisie. The third
                movement, especially, around the 8:30 mark, is particularly similar.
            </p>
            <ReactPlayer
                url="https://www.youtube.com/watch?v=f6COwmcIA3E"
                controls={true}
                width="600px"

            />
        </main>
    )
}

export default page