import { Link } from 'react-router-dom';
import { Row, Col, Card } from 'react-bootstrap';
import Dropzone from 'react-dropzone';
import useFileUploader from './useFileUploader';
import { FiX } from 'react-icons/fi';

const FileUploader = ({
  showPreview = true,
  onFileUpload,
  icon,
  extraText,
  text,
}) => {
  const { selectedFiles, handleAcceptedFiles, removeFile } = useFileUploader(showPreview);
  const Icon = icon;
  return (
    <>
      <Dropzone onDrop={(acceptedFiles) => handleAcceptedFiles(acceptedFiles, onFileUpload)}>
        {({ getRootProps, getInputProps }) => (
          <div
            className="dropzone d-flex justify-content-center align-items-center"
            style={{
              height: '300px',
            }}
          >
            <div className="dz-message needsclick" {...getRootProps()}>
              <input {...getInputProps()} />
              {Icon && <Icon className={`text-muted h1`} />}
              <h3>{text}</h3>
              <span className="text-muted fs-13">{extraText}</span>
            </div>
          </div>
        )}
      </Dropzone>

      <div className="dropzone-previews mt-3">
        {(selectedFiles || []).map((file, idx) => {
          const ext = file.name.substr(file.name.lastIndexOf('.') + 1);
          return (
            <Card className="mt-1 mb-0 shadow-none border" key={idx + '-file'}>
              <div className="p-2">
                <Row className="align-items-center">
                  {file.preview && (
                    <Col className="col-auto">
                      <img
                        data-dz-thumbnail=""
                        className="avatar-sm rounded bg-light"
                        alt={file.name}
                        src={file.preview}
                        style={{
                          maxWidth: '100%',
                          height: 'auto',
                          maxHeight: '200px',
                        }}
                      />
                    </Col>
                  )}
                  {!file.preview && (
                    <Col className="col-auto">
                      <div className="avatar-sm">
                        <span className="avatar-title bg-primary rounded">
                          {ext.toUpperCase()}
                        </span>
                      </div>
                    </Col>
                  )}
                  <Col className="ps-0">
                    <Link to="" className="text-muted fw-bold">
                      {file.name}
                    </Link>
                    <p className="mb-0">
                      <strong>{file.formattedSize}</strong>
                    </p>
                  </Col>
                  <Col className="text-end">
                    <Link to="" className="btn btn-link btn-lg text-muted shadow-none">
                      <FiX className="text-danger" onClick={() => removeFile(file)} />
                    </Link>
                  </Col>
                </Row>
              </div>
            </Card>
          );
        })}
      </div>
    </>
  );
};

export { FileUploader };
