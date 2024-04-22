/* eslint-disable react/prop-types */
import { useState, useEffect } from "react"
import { useNavigate} from "react-router-dom"
import { Container } from "./styles";
import { FaStar } from "react-icons/fa";
import { api } from "../../service/api";

import { Tag } from "../Tag";

export function InfoNote({ title, value, rating, id, ...rest }) {
    const [tags, setTags] = useState([])
    const navigate = useNavigate()

    function handlePreviewNote() {
        navigate(`/preview/${id}`)
    }

    useEffect(() => {
        async function fetchTags() {
          const response = await api.get(`/tags`)
          setTags(response.data)      
        }
        fetchTags()
      }, [])
    
    let tagsFilter = tags.filter(tagFilter => tagFilter.note_id === id)

    return (
        <Container {...rest}
            onClick={handlePreviewNote}
        >
            <h3>{title}</h3>

            <div className="star">
                {[...Array(5)].map((star, index) => {
                    const starValue = index + 1;

                    return (
                        <label key={index}>
                           
                            <FaStar
                                color={starValue <= rating ? '#ffc107' : '#e4e5e9'}
                                size={25}
                            />
                        </label>
                    );
                })}
            </div>

            <div className="text">
                <p>
                    {value.length > 250 ? value.substring(0, 250) + "..." : value}
                </p>
            </div>

            { 
                // console.log(teste)
                tagsFilter.map((tag, index) => (
                    <Tag 
                        key={index}
                        title={tag.name} 
                        className="tag-home" 
                    />
                ))
            }

            {/* <Tag title="Drama" className="tag-home" />
            <Tag title="Ação" className="tag-home" /> */}
        </Container>
    )
}