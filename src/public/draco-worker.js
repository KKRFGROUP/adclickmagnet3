// public/draco-worker.js
importScripts('https://www.gstatic.com/draco/v1/decoders/draco_decoder.js');

self.onmessage = function(e) {
  const { buffer, taskConfig } = e.data;
  const decoder = new DracoDecoderModule.Decoder();
  const decodedGeometry = decoder.DecodeBufferToGeometry(
    new Int8Array(buffer),
    buffer.byteLength
  );
  
  const buffers = {
    position: decoder.GetAttributeFloat32Array(
      decodedGeometry,
      decoder.GetAttributeByUniqueId(decodedGeometry, taskConfig.attributeIDs.position)
    ),
    normal: decoder.GetAttributeFloat32Array(
      decodedGeometry,
      decoder.GetAttributeByUniqueId(decodedGeometry, taskConfig.attributeIDs.normal)
    ),
    uv: decoder.GetAttributeFloat32Array(
      decodedGeometry,
      decoder.GetAttributeByUniqueId(decodedGeometry, taskConfig.attributeIDs.uv)
    )
  };

  decoder.destroy();
  decodedGeometry.destroy();

  self.postMessage({ buffers }, [
    buffers.position.buffer,
    buffers.normal.buffer,
    buffers.uv.buffer
  ]);
};