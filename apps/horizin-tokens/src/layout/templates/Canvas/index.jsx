import {RegionTopCanvas, RegionFooterCanvas} from '@regions';

const SiteTemplate = ({sx, sxMain, styled, children, ...props}) => {
  return (
    <Atom.Box sx={{variant: 'regions.canvas_container'}}>
      <Atom.Flex column sx={{minHeight: '100vh', flex: 1, ...sx}}>
        <RegionTopCanvas />
        <Atom.Flex
          center
          column
          gradient="amin"
          sx={{variant: 'regions.canvas_main'}}>
          {children}
        </Atom.Flex>
        <RegionFooterCanvas />
      </Atom.Flex>
    </Atom.Box>
  );
};

export default SiteTemplate;
