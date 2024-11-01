function MovieGrid(moviedetails)
{
    const movies=[{moviename:'abc'},{moviename: 'xyz'}, {moviename:'ABC'},{nmoviename :'mano'},{moviename :'narzo'}];
    return(

        <>
         <p>first Moviename:{moviename[0].moviename}</p>
         <p>second Moviename:{moviename[1].moviename}</p>
         <p>third Moviename :{moviename[2].moviename}</p>
         <p>fouth Moviename :{moviename[3].moviename}</p>
         <p>fifth Moviename:{moviename[4].moviename}</p>
        
         
        </>
    )
}
export default MovieGrid;