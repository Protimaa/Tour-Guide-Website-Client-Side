import { useForm } from "react-hook-form";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { FaUtensils } from "react-icons/fa";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddItems = () => {
    const { register, handleSubmit, reset } = useForm();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();
    const onSubmit = async (data) => {
        console.log(data)
        // image upload to imgbb and then get an url
        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });
        if (res.data.success) {            
            const serviceItem = {
                name: data.name,
                category: data.category,
                price: parseFloat(data.price),
                touristPlace: data.touristPlace,
                description: data.description,
                image: res.data.data.display_url
            }
            // 
            const serviceRes = await axiosSecure.post('/service', serviceItem);
            console.log(serviceRes.data)
            if(serviceRes.data.insertedId){
                reset();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.name} is added to the service.`,
                    showConfirmButton: false,
                    timer: 1500
                })
               
               
            }
        }
        console.log( 'with image url', res.data);
    };

    return (
        <div className="bg-red-300 p-10">
            <SectionTitle heading="add an item" ></SectionTitle>
            <div className="bg-red-100 p-10">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full my-6">
                        <label className="label">
                            <span className="label-text">Tourist Place Name*</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Tourist Place Name"
                            {...register('name', { required: true })}
                            required
                            className="input input-bordered w-full" />
                    </div>
                    <div className="flex gap-6">
                        {/* category */}
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Category*</span>
                            </label>
                            <select defaultValue="default" {...register('category', { required: true })}
                                className="select select-bordered w-full">
                                <option disabled value="default">Select a category</option>
                                <option value="adventure">Adventure</option>
                                <option value="relaxation">Relaxation</option>
                                <option value="nature">Nature</option>
                                <option value="historical">Historical</option>
                                <option value="offered">Offered</option>
                                <option value="popular">Popular</option>
                            </select>
                        </div>

                        

                    </div>

                    {/* price */}
                    <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Price*</span>
                            </label>
                            <input
                                type="number"
                                placeholder="Price"
                                {...register('price', { required: true })}
                                className="input input-bordered w-full" />
                        </div>

                    {/* Service details */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Service Description</span>
                        </label>
                        <textarea {...register('description')} className="textarea textarea-bordered h-24" placeholder="Service Description"></textarea>
                    </div>

                    <div className="form-control w-full my-6">
                        <input {...register('image', { required: true })} type="file" className="file-input w-full max-w-xs" />
                    </div>

                    <button className="btn">
                        Add Item <FaUtensils className="ml-4"></FaUtensils>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddItems;