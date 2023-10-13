import Frame from '@/components/frame/Frame';
import Modal from '@/components/modal/Modal';
import swagPhotos from '@/photos';

export default function PhotoModal({ params }) {
  const photos = swagPhotos;
  const photo = photos.find((p) => p.id === params.id);

  return (
    <>
      <Modal>
        <Frame photo={photo} />
      </Modal>
    </>
  );
}
