export const getPdfUrl = (filename: string) => {
    return `${ import.meta.env.VITE_PDF_ROOT_URL }/${ filename }`
}