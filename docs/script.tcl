##### read structure and coordinates
mol load gro 1aki_solv_ions.gro


#### delete initial line representation for everything
mol delrep 0 top

#### make VDW representation for ions
mol selection {ions}
mol color Name
mol representation VDW 
mol material Opaque
mol addrep top

#### make Cartoon representation for protein
mol selection {protein}
mol color Structure
mol representation NewCartoon
mol material Opaque
mol addrep top

#### make line representation for water
mol selection {water}
mol color Name
mol representation Lines
mol material Opaque
mol addrep top

#### turn off axes
axes location off

### set background white
color Display Background 8
