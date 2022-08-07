import imageUrlBuilder from '@sanity/image-url'
import { sanityClient } from './sanity';
function urlForThumbnail(source) {
    return imageUrlBuilder(sanityClient).image(source).url();
}
function urlFor(source) {
    return imageUrlBuilder(sanityClient).image(source).height(200).url();
}
function urlCartImage(source) {
    return imageUrlBuilder(sanityClient).image(source).width(120).url();
}
function urlcategoryImage(source) {
    return imageUrlBuilder(sanityClient).image(source).width(150).url();
}
export { urlFor, urlForThumbnail, urlCartImage, urlcategoryImage };