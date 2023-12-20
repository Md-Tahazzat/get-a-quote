'use server'
 
import { revalidateTag } from 'next/cache'
 
export  async function refetchAllServices() {
    revalidateTag( "all-services");
}
 
export  async function refetchAllProjects() {
    revalidateTag( "all-project");
}